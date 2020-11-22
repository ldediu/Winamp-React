import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faBackward,
  faForward,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({ currSong, isPlaying, setIsPlaying }) => {
  const [songInfo, setSongInfo] = useState({ currTime: null, duration: null });

  const audioRef = useRef(null);

  const playPauseSong = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const updateTime = (e) => {
    const timeNow = e.target.currentTime;
    const dur = e.target.duration;
    setSongInfo({ ...songInfo, currTime: timeNow, duration: dur });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  return (
    <div className="player">
      <div className="time-line">
        <p>{formatTime(songInfo.currTime)}</p>
        <input type="range" />
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
          icon={(isPlaying && faPause) || faPlay}
        />
        <FontAwesomeIcon
          className="player-forw-btn"
          size="2x"
          icon={faForward}
        />
      </div>
      <audio ref={audioRef} src={currSong.audio} onTimeUpdate={updateTime} />
    </div>
  );
};

export default Player;
