import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import Logo from "../../Logo.jpg";
import "./header.css";
const headerPresentation = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{ backgroundColor: "#fff" }}>
        <Toolbar>
          <img height="40" src={Logo} alt="logo" />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default headerPresentation;
