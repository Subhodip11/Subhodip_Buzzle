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
        <button className="button">...</button>
      </div>
      <div className="card-title">{props.contentTitle}</div>
      <div className="card-runtime">
        <TimeLapse fontSize="small" />
        &nbsp; {props.runTime}
      </div>
    </div>
  );
};

export default ContentBody;
