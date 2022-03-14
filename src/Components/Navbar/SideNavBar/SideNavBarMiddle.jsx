import React from "react";
import Avatar1 from "../../../images/codewithharry.png";
import Avatar2 from "../../../images/cleverprogrammer.png";
import Avatar3 from "../../../images/avatar3.webp";
import Avatar4 from "../../../images/avatar4.webp";
import "./CSS/SideNavBar.css";

const SideNavBarMiddle = () => {
  return (
    <div>
      <div className="thumbnail-header">
        <span>Recommanded Rooms</span>
      </div>
      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar1} alt="not found" className="avatar" />
          <span>CodeWithHarry</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar2} alt="not found" className="avatar" />
          <span>Clever Programmer</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar3} alt="not found" className="avatar" />
          <span>WebDevSimplified</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>

      <div className="thumbnail">
        <div className="thumbnail-left">
          <img src={Avatar4} alt="not found" className="avatar" />
          <span>FinFight</span>
        </div>
        <div className="thumbnail-right">
          <button>Join</button>
        </div>
      </div>
      <div className="see-more">
        <span>See more</span>
      </div>
    </div>
  );
};

export default SideNavBarMiddle;
