import React from "react";

const Song = ({ currSong, isPlaying }) => {
  return (
    <div className="song-cont">
      <div className="imgCont">
        <img
          src={currSong.cover}
          alt="albumCover"
          className={`${isPlaying ? "spinning" : ""}`}
        />
        <div className="imgCenter"></div>
      </div>
      <h2>{currSong.title}</h2>
    </div>
  );
};

export default Song;
