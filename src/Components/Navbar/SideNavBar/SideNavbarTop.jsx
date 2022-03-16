import React from "react";
import "./CSS/SideNavBar.css";
import HomeIcon from "@mui/icons-material/Home";
import AcUnit from "@mui/icons-material/AcUnit";
import Return from "@mui/icons-material/KeyboardReturn";

const SideNavbarTop = () => {
  return (
    <div>
      <div className="home active">
        <div className="home-left">
          <HomeIcon />
          <span>Home</span>
        </div>
        <div className="home-right">
          <Return fontSize="small" />
        </div>
      </div>
      <div className="culture">
        <AcUnit />
        <span>Culture</span>
      </div>
    </div>
  );
};

export default SideNavbarTop;
