import React from "react";
import styles from "./style.module.css";
import { useFetch } from "hooks";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Heart, Save, Watch } from "assets/icons";

export function VideoPlayback() {
  const { videoId } = useParams();

  const {
    state: { data: video, loading },
  } = useFetch({
    api: `/api/video/${videoId}`,
    property: "video",
  });

  return (
    <div>
      {!loading && (
        <div className={styles.videoCont}>
          <iframe
            src={`https://www.youtube.com/embed/${video.url}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className={styles.info}>
            <h5>{video.title}</h5>
            <div className={styles.descCont}>
              <div className={styles.channelInfo}>
                <img
                  className={classNames("avatar")}
                  src={video.profile}
                  alt={video.channel}
                />
                <p>{video.channel}</p>
              </div>
              <div className={styles.btnCont}>
                <button className={classNames("btn", styles.btn)}>
                  <Heart className={styles.liked} />
                  Like
                </button>
                <button className={classNames("btn", styles.btn)}>
                  <Save />
                  Save
                </button>
                <button
                  className={classNames("btn", styles.btn, styles.watched)}
                >
                  <Watch /> Watch Later
                </button>
              </div>
            </div>
            <p className={styles.videoDescription}>{video.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
