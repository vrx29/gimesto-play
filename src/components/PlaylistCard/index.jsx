import styles from "./style.module.css";
import React from "react";
import { Delete, Video } from "assets/icons";
import classNames from "classnames";
import { Link } from "react-router-dom";

export function PlaylistCard({ playlist, deletePlaylist }) {
  return (
    <div className={styles.playlist}>
      <Link to={`/playlist/${playlist._id}`}>
        <div className={styles.playlistContent}>
          <span className={styles.playlistIcon}>
            <Video />
          </span>
          <div className={styles.detailsCont}>
            <p className={styles.playlistName}>{playlist.name}</p>
            <p className={styles.playlistTimestamp}>
              Created on : {playlist.timeStamp}
            </p>
          </div>
        </div>
      </Link>
      <button
        className={classNames("btn", "btn-icon", styles.btnDelete)}
        onClick={() => deletePlaylist(playlist._id)}
      >
        <Delete />
      </button>
    </div>
  );
}
