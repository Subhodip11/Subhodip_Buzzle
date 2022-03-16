import React from "react";
import NotificationIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import "./CSS/MobileNavBar.css";
const MobileViewNavBar = (props) => {
  const onClickHandler = () => {
    props.setEnable(!props.enable);
    console.log(props.enable);
  };
  return (
    <div className="mobile-navbar">
      <button className="navbar-btn" onClick={onClickHandler}>
        |||
      </button>
      <div className="navbar-logo">Buzzle</div>
      <div className="others">
        <NotificationIcon />
        <SearchIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
};

export default MobileViewNavBar;
