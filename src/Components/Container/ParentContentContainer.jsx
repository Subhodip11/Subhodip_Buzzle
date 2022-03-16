import React from "react";
import ContentContainer from "./ContentContainer";
import "./CSS/ParentContentContainer.css";
import Thumbnail from "../../images/avatar1.png";
import VideoThumbnail from "../../images/videoThumbnail.webp";

const ParentContentContainer = (props) => {
  const sampleData = [
    {
      live: "live",
      thumbnailImageSrc: Thumbnail,
      currentViewers: "123k Viewers",
      ImageSource: VideoThumbnail,
      desc: "Updated Skills for Data Science based on Experienence awjkldawjkllwdiajo;k",
      contentTitle: "krish Naik",
      runTime: "01:20:00",
    },
    {
      live: "live",
      thumbnailImageSrc: Thumbnail,
      currentViewers: "12k Viewers",
      ImageSource: VideoThumbnail,
      desc: "Learn Data Scinece Tutorial- Full Course For beginner",
      contentTitle: "FreeCodeCamp.org.databbcc",
      runTime: "00:20:00",
    },
    {
      live: "live",
      thumbnailImageSrc: Thumbnail,
      currentViewers: "99k Viewers",
      ImageSource: VideoThumbnail,
      desc: "What Really Is Data Scinnce?Told by Data Scinece",
      contentTitle: "Jama Tech",
      runTime: "02:00:00",
    },
    {
      live: "live",
      thumbnailImageSrc: Thumbnail,
      currentViewers: "523k Viewers",
      ImageSource: VideoThumbnail,
      desc: "What Really Is Data Scinnce?Told by Data Scinece",
      contentTitle: "Jama Tech",
      runTime: "02:00:00",
    },
    {
      live: "live",
      thumbnailImageSrc: Thumbnail,
      currentViewers: "23k Viewers",
      ImageSource: VideoThumbnail,
      desc: "What Really Is Data Scinnce?Told by Data Scinece",
      contentTitle: "Jama Tech",
      runTime: "02:00:00",
    },
  ];

  return (
    <div className="content-container">
      <ContentContainer
        headerTitle=" Data Sceince"
        data={
          props.numberOfContent === 4
            ? sampleData.slice(0, sampleData.length - 1)
            : sampleData
        }
      />
      <ContentContainer
        headerTitle="SOFTWARE ENGINEERING"
        data={
          props.numberOfContent === 4
            ? sampleData.slice(0, sampleData.length - 1)
            : sampleData
        }
      />
      <ContentContainer
        headerTitle="FINANCE & INVESTMENT"
        data={
          props.numberOfContent === 4
            ? sampleData.slice(0, sampleData.length - 1)
            : sampleData
        }
      />
      <ContentContainer
        headerTitle="ENTREPRENEURSHIP"
        data={
          props.numberOfContent === 4
            ? sampleData.slice(0, sampleData.length - 1)
            : sampleData
        }
      />
    </div>
  );
};

export default ParentContentContainer;
