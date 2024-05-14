import React from "react";
import styles from "./styles.module.scss";

interface Song {
  id: number;
  name: string;
  artist: string;
  cover: string;
}

interface LibrarySongProps {
  song: Song;
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  currentSong: Song;
}

const LibrarySong: React.FC<LibrarySongProps> = ({
  song,
  setCurrentSong,
  currentSong,
}) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
  };

  return (
    <div
      // We can add classes if conditions are passed, directly in the event handler
      className={`${styles.library_song} ${
        song.id === currentSong.id ? styles.selected : ""
      }`}
      onClick={() => {
        songSelectHandler();
      }}
    >
      <img alt={song.name} src={song.cover}></img>
      <div className={styles.song_description}>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;
