import React from "react";
import "./CSS/ContentHeader.css";

const ContentHeader = (props) => {
  return (
    <div className="content-card-header">
      <span>Top</span>
      <span>&nbsp;Live Events&nbsp;</span>
      <span>From&nbsp;</span>
      <span style={{ textDecoration: "underline" }}>
        {props.title}&nbsp;
      </span>{" "}
      <span>World</span>
    </div>
  );
};

export default ContentHeader;
