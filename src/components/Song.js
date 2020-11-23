import React from "react";

const Song = ({ currSong }) => {
  return (
    <div className="song-cont">
      <img src={currSong.cover} alt="albumCover"></img>
      <h2>{currSong.title}</h2>
    </div>
  );
};

export default Song;
