import classNames from "classnames";
import { Banner, VideoCard } from "components";
import { useVideo } from "context";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { filterData } from "utils/videoUtils";
import styles from "./style.module.css";

export function Discover() {
  const { videos, categories } = useVideo();
  const [category, setCategory] = useState("All");
  let filteredVideos = filterData(videos, category);

  return (
    <>
      <Banner />
      <div className={styles.categories}>
        {categories.map(({ _id, categoryName }) => (
          <span
            className={classNames(
              styles.categoryChip,
              category === categoryName && styles.active
            )}
            key={_id}
            onClick={() => setCategory(categoryName)}
          >
            {categoryName}
          </span>
        ))}
      </div>
      <div className={styles.videoCont}>
        {filteredVideos.map((video) => (
          <Link to={`/video/${video._id}`} key={video._id}>
            <VideoCard video={video} />
          </Link>
        ))}
      </div>
    </>
  );
}
