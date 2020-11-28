import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackward,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  currSong,
  isPlaying,
  setIsPlaying,
  audioRef,
  setSongInfo,
  songInfo,
  songs,
  setCurrSong,
  setSongs,
}) => {
  const updateActiveSideMenu = (next) => {
    const updatedSongs = songs.map((song) => {
      if (song.id === next.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(updatedSongs);
  };

  const playPauseSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const scrollInputRange = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currTime: e.target.value });
  };

  const changeSong = async (dir) => {
    let currInd = songs.findIndex((sng) => sng.id === currSong.id);
    if (dir === "forward") {
      await setCurrSong(songs[currInd + 1] || songs[0]);
      updateActiveSideMenu(songs[currInd + 1] || songs[0]);
    } else if (dir === "backward") {
      await setCurrSong(songs[currInd - 1] || songs[songs.length - 1]);
      updateActiveSideMenu(songs[currInd - 1] || songs[songs.length - 1]);
    }
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  return (
    <div className="player">
      <div className="time-line">
        <p>{formatTime(songInfo.currTime)}</p>
        <input
          type="range"
          min={0}
          max={songInfo.duration || 0}
          value={songInfo.currTime}
          onChange={scrollInputRange}
        />
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0.00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="player-back-btn"
          size="2x"
          icon={faBackward}
          onClick={() => changeSong("backward")}
        />
        <FontAwesomeIcon
          className="player-play-btn"
          onClick={playPauseSong}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="player-forw-btn"
          size="2x"
          icon={faForward}
          onClick={() => changeSong("forward")}
        />
      </div>
    </div>
  );
};

export default Player;
