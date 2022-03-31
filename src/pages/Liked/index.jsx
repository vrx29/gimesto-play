import { useLikedVideo } from "context";
import React, { useEffect } from "react";
import styles from "./style.module.css";
import { CardLoader, EmptyState, SharedVideoCard } from "components";

export function Liked() {
  const { likedVideos, loading, getLikedVideos } = useLikedVideo();

  useEffect(() => {
    getLikedVideos();
  }, []);

  return (
    <>
      <h2>
        Liked Videos
        <span className={styles.videosCount}>{likedVideos.length} video</span>
      </h2>

      {loading ? (
        <div className={styles.videosCont}>
          {new Array(8).fill().map((_, id) => (
            <CardLoader key={id} />
          ))}
        </div>
      ) : likedVideos.length > 0 ? (
        <div className={styles.videosCont}>
          {likedVideos.map((video) => (
            <SharedVideoCard video={video} key={video._id} />
          ))}
        </div>
      ) : (
        <EmptyState msg="You haven't liked any video" />
      )}
    </>
  );
}
