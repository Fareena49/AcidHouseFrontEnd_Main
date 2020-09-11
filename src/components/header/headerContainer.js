import React, { useEffect, useState } from "react";
import HeaderPresentation from "./headerPresentation";
import { useHistory } from "react-router-dom";
const HeaderContainer = (props) => {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      props.setAuthentication(true);
    } else {
      history.push("/");
    }
  }, []);
  return (
    <HeaderPresentation
      id={id}
      open={open}
      anchorEl={anchorEl}
      authenticated={props.authenticated}
      handlePopClick={(val) => setAnchorEl(val)}
      handlePopClose={() => setAnchorEl(null)}
      handleLogout={() => {
        setAnchorEl(null);
        sessionStorage.removeItem("token");
        props.setAuthentication(false);
        history.push("/");
      }}
    />
  );
};

export default HeaderContainer;
