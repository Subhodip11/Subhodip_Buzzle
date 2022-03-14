import React from "react";
import SideNavBarBottom from "./SideNavBarBottom";
import SideNavBarMiddle from "./SideNavBarMiddle";
import SideNavbarTop from "./SideNavbarTop";
import "./CSS/SideNavBar.css";

export const SideNavBar = (props) => {
  const obj = {
    display: props.enable ? "block" : "none",
  };

  return (
    <div className="side-navbar" style={obj}>
      <SideNavbarTop />
      <SideNavBarMiddle />
      <SideNavBarBottom />
    </div>
  );
};
