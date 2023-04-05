import React from "react";
import { Avatar } from "@material-ui/core";
import "./VideoCard.css";
function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videocard">
      <img image="videocard__thumbnail" src={image} alt="" />
      <div className="videocard__info">
        <Avatar
          className="videocard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videocard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
