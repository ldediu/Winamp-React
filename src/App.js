import React, { useRef, useState } from "react";
import "./styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import SideMenu from "./components/SideMenu";
import playList from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [songs, setSongs] = useState(playList);
  const [currSong, setCurrSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({ currTime: 0, duration: 0 });
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const audioRef = useRef(null);

  const updateTime = (e) => {
    const timeNow = e.target.currentTime;
    const dur = e.target.duration;
    setSongInfo({ ...songInfo, currTime: timeNow, duration: dur });
  };

  const autoPlayNext = async () => {
    let currInd = songs.findIndex((sng) => sng.id === currSong.id);
    await setCurrSong(songs[currInd + 1] || songs[0]);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className="App">
      <FontAwesomeIcon
        className="hamIcon"
        size="2x"
        icon={faBars}
        onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}
      />
      <SideMenu
        songs={songs}
        setCurrSong={setCurrSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        isSideMenuOpen={isSideMenuOpen}
      />
      <Song currSong={currSong} />
      <Player
        currSong={currSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        audioRef={audioRef}
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrSong={setCurrSong}
        setSongs={setSongs}
      />
      <audio
        ref={audioRef}
        src={currSong.audio}
        onTimeUpdate={updateTime}
        onLoadedMetadata={updateTime}
        onEnded={autoPlayNext}
      />
    </div>
  );
}

export default App;
