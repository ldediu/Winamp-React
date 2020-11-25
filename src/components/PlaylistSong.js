import React from "react";

const PlaylistSong = ({
  aSong,
  setCurrSong,
  songs,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const changeSong = () => {
    const selSong = songs.filter((sng) => sng.id === aSong.id);
    setCurrSong(selSong[0]);
    const updatedSongs = songs.map((song) => {
      if (song.id === aSong.id) {
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
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          audioRef.current.play();
        });
      }
    }
  };

  return (
    <div
      className={`PlaylistSong ${aSong.active ? "activeSong" : ""}`}
      onClick={changeSong}
    >
      <img src={aSong.cover} alt="albumCover"></img>
      <h4>{aSong.title}</h4>
      <h4 className="songDuration">{aSong.duration}</h4>
    </div>
  );
};

export default PlaylistSong;
