import styles from "./style.module.css";
import { useHistory } from "context";
import React, { useEffect } from "react";
import { CardLoader, EmptyState, SharedVideoCard } from "components";
import classNames from "classnames";

export function History() {
  const { history, loading, getHistory, clearHistory } = useHistory();

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <>
      <div className={styles.headCont}>
        <h2>
          History
          <span className={styles.videosCount}>
            {!loading && history.length > 0 && `${history.length} video`}
          </span>
        </h2>
        <button
          className={classNames("btn", "btn-error")}
          onClick={clearHistory}
        >
          Clear History
        </button>
      </div>

      {loading ? (
        <div className={styles.videosCont}>
          {new Array(8).fill().map((_, id) => (
            <CardLoader key={id} />
          ))}
        </div>
      ) : history.length > 0 ? (
        <div className={styles.videosCont}>
          {history.map((video) => (
            <SharedVideoCard video={video} key={video._id} />
          ))}
        </div>
      ) : (
        <EmptyState msg="You haven't watched any video" />
      )}
    </>
  );
}
