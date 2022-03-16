import React from "react";
import "./CSS/ContentBody.css";
import TimeLapse from "@mui/icons-material/Timelapse";
const ContentBody = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <div className="live">{props.live}</div>
        <div className="card-thumbnail">
          <img src={props.thumbnailImageSrc} alt="" />
        </div>
        <img src={props.ImageSource} alt="" />
        <div className="watching">{props.currentViewers}</div>
      </div>
      <div className="card-body">
        <div className="desc">{props.desc}</div>
        <span className="button">...</span>
      </div>
      <div className="card-title">{props.contentTitle}</div>
      <div className="card-runtime">
        <TimeLapse fontSize="smaller" style={{ color: "white" }} />
        &nbsp; {props.runTime}
      </div>
    </div>
  );
};

export default ContentBody;
