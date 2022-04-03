import React from "react";
import styles from "./style.module.css";

export function PlaylistLoader() {
  return (
    <div className={styles.playlist}>
      <span className={styles.playlistIcon}></span>
      <div className={styles.playlistName}></div>
      <span className={styles.btnDelete}></span>
    </div>
  );
}
