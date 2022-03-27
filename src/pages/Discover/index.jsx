import { Banner, VideoCard } from "components";
import { useVideo } from "context";
import React from "react";
import styles from "./style.module.css";

export function Discover() {
  const { videos, categories } = useVideo();
  return (
    <>
      <Banner />
      <div className={styles.categories}>
        {categories.map(({ _id, categoryName }) => (
          <span className={styles.categoryChip} key={_id}>
            {categoryName}
          </span>
        ))}
      </div>
      <div className={styles.videoCont}>
        {videos.map((video) => (
          <VideoCard video={video} key={video._id} />
        ))}
      </div>
    </>
  );
}
