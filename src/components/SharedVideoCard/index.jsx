import { Heart, Save, Watch } from "assets/icons";
import classNames from "classnames";
import { useLikedVideo } from "context";
import React from "react";
import styles from "./style.module.css";

export function SharedVideoCard({ video }) {
  const {
    title,
    thumbnail,
    channel,
    profile,
    views,
    playbackTime,
    uploadTime,
  } = video;
  const { likedVideos, addLikedVideo, deleteLikedVideo } = useLikedVideo();

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
        <div className={styles.actionCont}>
          {likedVideos.some((item) => item._id === video._id) ? (
            <button
              className={classNames("btn", styles.btn)}
              onClick={() => deleteLikedVideo(video._id)}
            >
              <Heart className={styles.liked} />
              Liked
            </button>
          ) : (
            <button
              className={classNames("btn", styles.btn)}
              onClick={() => addLikedVideo(video)}
            >
              <Heart />
              Like
            </button>
          )}
          <button className={classNames("btn", styles.btn)}>
            <Save />
            Save
          </button>
          <button className={classNames("btn", styles.btn, styles.watched)}>
            <Watch /> Watch Later
          </button>
        </div>
      </div>
    </div>
  );
}
