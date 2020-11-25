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
}) => {
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
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          className="player-back-btn"
          size="2x"
          icon={faBackward}
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
        />
      </div>
    </div>
  );
};

export default Player;
