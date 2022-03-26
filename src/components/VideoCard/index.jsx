import React from "react";
import styles from "./style.module.css";
import four from "assets/videos/four.jpg";
import fourProfile from "assets/profiles/profile4.jpeg";

export function VideoCard({ video }) {
  const {
    title,
    thumbnail,
    channel,
    profile,
    views,
    time,
    playbackTime,
    uploadTime,
  } = video;
  return (
    <div className={styles.videoCard}>
      <div className={styles.videoThumbnail}>
        <span className={styles.videoTime}>{playbackTime} min</span>
        <img
          className={styles.videoBanner}
          src={thumbnail}
          alt={channel}
          loading="lazy"
        />
        <img
          className={styles.profileImg}
          src={profile}
          alt={profile}
          loading="lazy"
        />
      </div>

      <div className={styles.videoDetails}>
        <p className={styles.videoChannel}>{channel}</p>
        <h6 className={styles.videoTitle}>{title}</h6>
        <p className={styles.videoStats}>
          {views} views &#xb7; {uploadTime} ago
        </p>
      </div>
    </div>
  );
}
