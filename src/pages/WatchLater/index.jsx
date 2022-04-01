import styles from "./style.module.css";
import { useWatch } from "context";
import React, { useEffect } from "react";
import { CardLoader, EmptyState, SharedVideoCard } from "components";

export function WatchLater() {
  const { watchLater, loading, getWatchLater } = useWatch();

  useEffect(() => {
    getWatchLater();
  }, []);

  return (
    <>
      <h2>
        Watch Later
        <span className={styles.videosCount}>
          {!loading && watchLater.length > 0 && `${watchLater.length} video`}
        </span>
      </h2>

      {loading ? (
        <div className={styles.videosCont}>
          {new Array(8).fill().map((_, id) => (
            <CardLoader key={id} />
          ))}
        </div>
      ) : watchLater.length > 0 ? (
        <div className={styles.videosCont}>
          {watchLater.map((video) => (
            <SharedVideoCard video={video} key={video._id} />
          ))}
        </div>
      ) : (
        <EmptyState msg="You haven't added any video to watch list" />
      )}
    </>
  );
}
