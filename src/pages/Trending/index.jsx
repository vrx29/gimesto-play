import { TrendingCard } from "components";
import { useVideo } from "context";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.css";

export function Trending() {
  const { videos } = useVideo();
  const trendingVideos = videos.filter((video) => video.trending);
  return (
    <>
      <h2>Trending</h2>
      <div className={styles.videosCont}>
        {trendingVideos.map((video, index) => {
          let id = index + 1;
          if (id < 10) {
            id = "0" + id;
          }
          return (
            <Link to={`/video/${video._id}`} key={video._id}>
              <TrendingCard data={video} id={id} />
            </Link>
          );
        })}
      </div>
    </>
  );
}
