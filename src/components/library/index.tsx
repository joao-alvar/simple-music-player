import React from "react";
import LibrarySong from "../library_song";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styles from "./styles.module.scss";

interface Song {
  id: number;
  name: string;
  artist: string;
  cover: string;
}

interface Props {
  currentSong: Song;
  songs: Song[];
  setCurrentSong: React.Dispatch<React.SetStateAction<Song>>;
  libraryStatus: boolean;
  setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Library: React.FC<Props> = ({
  currentSong,
  songs,
  setCurrentSong,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <div className={`${styles.library} ${libraryStatus ? styles.shown : ""}`}>
      <div className={styles.library_head}>
        <h1>Library</h1>
        <button title="Play" onClick={() => setLibraryStatus(!libraryStatus)}>
          <FontAwesomeIcon icon={faTimes} className={styles.fa_times} />
        </button>
      </div>
      <div className={styles.songs}>
        {songs.map((song) => (
          <LibrarySong
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            song={song}
            key={song.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
