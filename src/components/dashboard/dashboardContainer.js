import React, { useState } from "react";
import DashboardPresentation from "./dashboardPresentation";

const DashboardContainer = (props) => {
  const [open, setOpen] = useState(true);
  const [activeId, setActiveId] = useState(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const changeActiveState = (id) => {
    setActiveId(id);
  };
  return (
    <DashboardPresentation
      open={open}
      activeId={activeId}
      handleDrawerClose={handleDrawerClose}
      handleDrawerOpen={handleDrawerOpen}
      changeActiveState={changeActiveState}
      setAuthentication={()=>props.setAuthentication(false)}
    />
  );
};

export default DashboardContainer;
