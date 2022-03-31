import { Eye, HeartTail } from "assets/icons";
import React from "react";
import styles from "./style.module.css";

export function TrendingCard({ data, id }) {
  const {
    title,
    thumbnail,
    channel,
    profile,
    views,
    uploadTime,
    playbackTime,
    likes,
  } = data;
  return (
    <div className={styles.trendingCard}>
      <span className={styles.id}>{id}</span>
      <div className={styles.imgCont}>
        <img src={thumbnail} alt={title} />
        <span className={styles.videoTime}>{playbackTime} min</span>
      </div>
      <div className={styles.dataCont}>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.videoStats}>
          <span>
            <Eye />
            {views} views
          </span>
          <span>
            <HeartTail />
            {likes} likes
          </span>
        </p>
        <div className={styles.channelDetails}>
          <img
            className={styles.profileImg}
            src={profile}
            alt={profile}
            loading="lazy"
          />
          <div>
            <p className={styles.videoChannel}>{channel}</p>
            <p className={styles.uploadTime}>{uploadTime} ago</p>
          </div>
        </div>
      </div>
      {/* <video id="video1" width="420" poster={video}>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML video.
      </video> */}
    </div>
  );
}
