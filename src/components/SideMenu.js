import React, { useState } from "react";
import PlaylistSong from "./PlaylistSong";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

const SideMenu = ({
  songs,
  setCurrSong,
  audioRef,
  isPlaying,
  setSongs,
  isSideMenuOpen,
}) => {
  const [electrG, setElectG] = useState(false);
  const [acoustG, setAcoustG] = useState(false);
  const [cinemG, setCinemG] = useState(false);
  const [hiphopG, setHiphopG] = useState(false);
  const [houseG, setHouseG] = useState(false);
  return (
    <div className={`SideMenu ${isSideMenuOpen ? "sideIsOpen" : ""}`}>
      <h2>PLAYLIST</h2>
      <div className="playlist">
        <h3>
          Electronic{" "}
          <FontAwesomeIcon
            className="minimizeIcon"
            size="2x"
            icon={faSortDown}
            onClick={() => setElectG(!electrG)}
          />
        </h3>
        <div className={`electronicCont ${electrG ? "genreMinimized" : ""}`}>
          {songs
            .filter((song) => song.genre === "Electronic")
            .map((song) => (
              <PlaylistSong
                aSong={song}
                key={song.id}
                setCurrSong={setCurrSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
        </div>
        <h3>
          Acoustic{" "}
          <FontAwesomeIcon
            className="minimizeIcon"
            size="2x"
            icon={faSortDown}
            onClick={() => setAcoustG(!acoustG)}
          />
        </h3>
        <div className={`acousticCont ${acoustG ? "genreMinimized" : ""}`}>
          {songs
            .filter((song) => song.genre === "Acoustic")
            .map((song) => (
              <PlaylistSong
                aSong={song}
                key={song.id}
                setCurrSong={setCurrSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
        </div>
        <h3>
          Cinematic{" "}
          <FontAwesomeIcon
            className="minimizeIcon"
            size="2x"
            icon={faSortDown}
            onClick={() => setCinemG(!cinemG)}
          />
        </h3>
        <div className={`CinematicCont ${cinemG ? "genreMinimized" : ""}`}>
          {songs
            .filter((song) => song.genre === "Cinematic")
            .map((song) => (
              <PlaylistSong
                aSong={song}
                key={song.id}
                setCurrSong={setCurrSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
        </div>
        <h3>
          Hip Hop{" "}
          <FontAwesomeIcon
            className="minimizeIcon"
            size="2x"
            icon={faSortDown}
            onClick={() => setHiphopG(!hiphopG)}
          />
        </h3>
        <div className={`HiphopCont ${hiphopG ? "genreMinimized" : ""}`}>
          {songs
            .filter((song) => song.genre === "Hip Hop")
            .map((song) => (
              <PlaylistSong
                aSong={song}
                key={song.id}
                setCurrSong={setCurrSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
        </div>
        <h3>
          House{" "}
          <FontAwesomeIcon
            className="minimizeIcon"
            size="2x"
            icon={faSortDown}
            onClick={() => setHouseG(!houseG)}
          />
        </h3>
        <div className={`houseCont ${houseG ? "genreMinimized" : ""}`}>
          {songs
            .filter((song) => song.genre === "House")
            .map((song) => (
              <PlaylistSong
                aSong={song}
                key={song.id}
                setCurrSong={setCurrSong}
                songs={songs}
                audioRef={audioRef}
                isPlaying={isPlaying}
                setSongs={setSongs}
              />
            ))}
        </div>
      </div>
      <p>
        <i>Thanks to https://www.hooksounds.com/</i>
      </p>
      <p>
        <i>for provided music</i>
      </p>
    </div>
  );
};

export default SideMenu;
