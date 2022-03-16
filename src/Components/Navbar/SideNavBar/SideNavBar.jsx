import React from "react";
import SideNavBarBottom from "./SideNavBarBottom";
import SideNavbarTop from "./SideNavbarTop";
import "./CSS/SideNavBar.css";

export const SideNavBar = (props) => {
  const styleObj = {
    display: props.enable ? "block" : "none",
    height: "auto",
  };

  return (
    <div className="side-navbar" style={styleObj}>
      <SideNavbarTop />
      <SideNavBarBottom />
    </div>
  );
};
