import { Delete, Heart, Save, Watch } from "assets/icons";
import classNames from "classnames";
import { useLikedVideo, useWatch } from "context";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";

export function SharedVideoCard({ video, deleteVideo }) {
  const {
    _id,
    title,
    thumbnail,
    channel,
    profile,
    views,
    playbackTime,
    uploadTime,
  } = video;
  const { likedVideos, addLikedVideo, deleteLikedVideo } = useLikedVideo();
  const { watchLater, addWatchLater, deleteWatchLater } = useWatch();
  const { pathname } = useLocation();
  console.log();
  return (
    <div className={styles.videoCard}>
      <Link to={`/video/${_id}`}>
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
      </Link>
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
          {!pathname.startsWith("/playlist/") && (
            <button className={classNames("btn", styles.btn)}>
              <Save />
              Save
            </button>
          )}

          {watchLater.some((item) => item._id === video._id) ? (
            <button
              className={classNames("btn", styles.btn, styles.watched)}
              onClick={() => deleteWatchLater(video._id)}
            >
              <Watch /> Watch Later
            </button>
          ) : (
            <button
              className={classNames("btn", styles.btn)}
              onClick={() => addWatchLater(video)}
            >
              <Watch /> Watch Later
            </button>
          )}
          {deleteVideo && (
            <button
              className={classNames("btn", styles.btn, styles.deleteIcon)}
              onClick={() => deleteVideo(video._id)}
            >
              <Delete />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
