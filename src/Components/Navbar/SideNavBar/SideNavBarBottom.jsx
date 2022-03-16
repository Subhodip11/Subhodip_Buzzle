import React, { useState } from "react";
import Avatar4 from "../../../images/avatar4.webp";
import "./CSS/SideNavBar.css";

const SideNavBarBottom = () => {
  return (
    <div>
      <div className="thumbnail-header">
        <span>Recommanded Creators</span>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right thumbnail-right-bottom">
          <button>Rooms</button>
        </div>
      </div>

      <div className="see-more">
        <span>See more</span>
      </div>
    </div>
  );
};

export default SideNavBarBottom;
