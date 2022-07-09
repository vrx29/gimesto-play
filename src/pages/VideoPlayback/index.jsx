import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { useFetch } from "hooks";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Heart, Save, Watch } from "assets/icons";
import {
  useAuth,
  useHistory,
  useLikedVideo,
  usePlaylist,
  useWatch,
} from "context";
import { AddPlaylist } from "components";

export function VideoPlayback() {
  const { videoId } = useParams();
  const { likedVideos, addLikedVideo, deleteLikedVideo } = useLikedVideo();
  const { watchLater, addWatchLater, deleteWatchLater } = useWatch();
  const { playlists, getPlaylists } = usePlaylist();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const { userAuthState } = useAuth();
  const { addHistory } = useHistory();
  const {
    state: { data: video, loading },
  } = useFetch({
    api: `/api/video/${videoId}`,
    property: "video",
  });

  useEffect(() => {
    getPlaylists();
  }, []);

  useEffect(() => {
    if (video._id) {
      addHistory(video);
    }
  }, [video]);

  return (
    <div>
      {!loading && (
        <div className={styles.videoCont}>
          <iframe
            src={`https://www.youtube.com/embed/${video.url}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
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
              {video?._id && userAuthState.isLoggedIn && (
                <div className={styles.btnCont}>
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
                  <button
                    className={classNames("btn", styles.btn)}
                    onClick={() => setShowPlaylistModal(true)}
                  >
                    <Save />
                    Save
                  </button>
                  {showPlaylistModal && (
                    <AddPlaylist
                      title="Add to Playlist"
                      handleModal={setShowPlaylistModal}
                      playlists={playlists}
                      video={video}
                    />
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
                </div>
              )}
            </div>
            <p className={styles.videoDescription}>{video.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
