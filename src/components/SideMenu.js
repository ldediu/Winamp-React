import React from "react";
import PlaylistSong from "./PlaylistSong";

const SideMenu = ({ songs }) => {
  return (
    <div className="SideMenu">
      <h2>Playlist</h2>
      <div className="playlist">
        {songs.map((song) => (
          <PlaylistSong aSong={song} key={song.id} />
        ))}
      </div>
      <p>Thanks to https://www.hooksounds.com/</p>
    </div>
  );
};

export default SideMenu;
