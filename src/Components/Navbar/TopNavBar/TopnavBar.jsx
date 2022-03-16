import React from "react";
import Search from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./CSS/TopNavBar.css";

const TopnavBar = (props) => {
  return (
    <div className="top-navbar">
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <div className="search-button">
            <Search />
          </div>
        </div>
      </div>

      <div className="login-signup">
        <NotificationsNoneIcon
          style={{ margin: "0 0.3rem", cursor: "pointer" }}
        />
        <AccountCircleIcon style={{ marginRight: "1rem", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default TopnavBar;
