import { TrendingCard } from "components";
import { useVideo } from "context";
import React from "react";
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
          return <TrendingCard key={video._id} data={video} id={id} />;
        })}
      </div>
    </>
  );
}
