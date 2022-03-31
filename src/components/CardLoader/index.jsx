import styles from "./style.module.css";
import React from "react";

export function CardLoader() {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <span className={styles.videoTime}></span>
        <span className={styles.channelImg}></span>
      </div>
      <div className={styles.content}>
        <p className={styles.videoChannel}></p>
        <h6 className={styles.videoTitle}>&nbsp;</h6>
        <p className={styles.videoStats}></p>
      </div>
    </div>
  );
}
