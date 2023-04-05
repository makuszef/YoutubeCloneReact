import React from "react";
import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
function ChannelRow({
  image,
  Channel,
  subs,
  noOfVideos,
  verified,
  description,
}) {
  return (
    <div className="channelrow">
      <Avatar className="channelrow__logo" alt={Channel} src={image} />
      <div className="channelrow__text">
        <h4>
          {Channel} {verified ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
        </h4>
        <p>
          {subs} subscribers {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
