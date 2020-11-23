import React, { useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import SideMenu from "./components/SideMenu";
import playList from "./data";

function App() {
  const [songs, setSongs] = useState(playList);
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <SideMenu songs={songs} />
      <Song currSong={currSong} />
      <Player
        currSong={currSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
      />
    </div>
  );
}

export default App;
