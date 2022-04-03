import styles from "./style.module.css";
import React, { useState } from "react";
import { usePlaylist } from "context";
import classNames from "classnames";

export function AddPlaylist({ title, handleModal, playlists, video }) {
  const { addPlaylist, addVideoToPlaylist, deleteVideoFromPlaylist } =
    usePlaylist();
  const [playlistName, setPlaylistName] = useState("");

  const handleClose = (e) => {
    handleModal(false);
  };

  const handleAddPlaylist = () => {
    if (playlistName.length > 0) {
      addPlaylist({ name: playlistName, timeStamp: new Date().toDateString() });
      setPlaylistName("");
    }

    if (!playlists) {
      handleModal(false);
    }
  };

  const handlePlaylistChange = (e, playlistId) => {
    if (e.target.checked) {
      addVideoToPlaylist(playlistId, video);
    } else {
      deleteVideoFromPlaylist(playlistId, video._id);
    }
  };

  return (
    <div className={styles.modalCont} onClick={handleClose}>
      <div
        className={styles.modal}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <h6 className={styles.title}>{title}</h6>
        {playlists && (
          <div className={styles.playlistCont}>
            {playlists.map((item) => (
              <label
                className={styles.filterCheckbox}
                key={item._id}
                htmlFor={item.name}
              >
                <input
                  id={item.name}
                  checked={item.videos.some((i) => i._id === video._id)}
                  type="checkbox"
                  onChange={(e) => handlePlaylistChange(e, item._id)}
                />
                {item.name}
              </label>
            ))}
          </div>
        )}
        <input
          className="input"
          type="email"
          placeholder="Create new playlist"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
        />
        <button
          className={classNames("btn", "btn-primary", styles.btn)}
          onClick={handleAddPlaylist}
        >
          Create new Playlist
        </button>
      </div>
    </div>
  );
}
