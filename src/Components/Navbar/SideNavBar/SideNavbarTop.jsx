import React from "react";
import "./CSS/SideNavBar.css";
import HomeIcon from "@mui/icons-material/Home";
import AcUnit from "@mui/icons-material/AcUnit";
import People from "@mui/icons-material/People";
import PlayListAdd from "@mui/icons-material/PlaylistAdd";
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
          <Return />
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
