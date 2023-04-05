import React from "react";
import "./RecomendedVideos.css";
import VideoCard from "./VideoCard ";
function RecomendedVideos() {
  return (
    <div className="recommendedvideos">
      <h1>Recommended</h1>
      <div className="recommendedvideos__videos">
        <VideoCard
          title="become a dev"
          views="1M Views"
          timestamp="3 days ago"
        />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default RecomendedVideos;
