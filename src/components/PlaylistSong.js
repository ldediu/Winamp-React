import React from "react";

const PlaylistSong = ({ aSong }) => {
  return (
    <div className="PlaylistSong">
      <img src={aSong.cover} alt="albumCover"></img>
      <h3>{aSong.genre}</h3>
      <h4>{aSong.title}</h4>
    </div>
  );
};

export default PlaylistSong;
