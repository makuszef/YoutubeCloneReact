import React from "react";
import "./SearchPage.css";
import TuneIcon from "@material-ui/icons/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchpage">
      <div className="searchpage__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://i.redd.it/4q36jtf1jik21.jpg"
        Channel="Peter Parker"
        verified
        subs="659K"
        noOfVideos={382}
        description="random description"
      />
      <hr />

      <VideoRow
        image="https://i.redd.it/4q36jtf1jik21.jpg"
        channel="Peter Parker"
        views="1.5K"
        timestamp="second ago"
        title="random title"
        subs="659K"
        description="random description"
      />
    </div>
  );
}

export default SearchPage;
