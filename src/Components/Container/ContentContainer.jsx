import React from "react";
import ContentBody from "./ContentBody";
import ContentHeader from "./ContentHeader";
import "./CSS/ContentContainer.css";

const ContentContainer = (props) => {
  return (
    <div>
      <ContentHeader title={props.headerTitle} />
      <div className="scrollable">
        {props.data &&
          props.data.map((element, index) => {
            return (
              <ContentBody
                title={index}
                live={element.live}
                thumbnailImageSrc={element.thumbnailImageSrc}
                currentViewers={element.currentViewers}
                ImageSource={element.ImageSource}
                desc={element.desc}
                contentTitle={element.contentTitle}
                runTime={element.runTime}
              />
            );
          })}
      </div>
      <div className="see-more-tag">
        <a href="#">See More</a>
      </div>
    </div>
  );
};

export default ContentContainer;
