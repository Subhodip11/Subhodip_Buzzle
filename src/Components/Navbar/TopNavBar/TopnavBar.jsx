import React from "react";
import Search from "@mui/icons-material/Search";
import "./CSS/TopNavBar.css";
const TopnavBar = (props) => {
  const onClickHandler = () => {
    props.setEnable(!props.enable);
  };

  return (
    <div className="top-navbar">
      <div className="search-container">
        <div className="button-sidebar">
          <span onClick={onClickHandler}>|||</span>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <div className="search-button">
            <Search />
          </div>
        </div>
      </div>

      <div className="login-signup">
        <button className="login">Login</button>
        <button className="signup">Signin</button>
      </div>
    </div>
  );
};

export default TopnavBar;
