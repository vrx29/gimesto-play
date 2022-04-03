import styles from "./style.module.css";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { usePlaylist } from "context";
import { CardLoader, EmptyState, SharedVideoCard } from "components";

export function PlaylistVideos() {
  const { playlistId } = useParams();
  const { loading, currentPlaylist, getPlaylistData, deleteVideoFromPlaylist } =
    usePlaylist();

  useEffect(() => {
    getPlaylistData(playlistId);
  }, []);

  const deleteVideo = (videoId) => {
    deleteVideoFromPlaylist(playlistId, videoId);
  };
  
  return (
    <>
      <h2>Playlist</h2>
      {loading ? (
        <div className={styles.videosCont}>
          {new Array(8).fill().map((_, id) => (
            <CardLoader key={id} />
          ))}
        </div>
      ) : currentPlaylist?.length > 0 ? (
        <div className={styles.videosCont}>
          {currentPlaylist.map((video) => (
            <SharedVideoCard
              video={video}
              key={video._id}
              deleteVideo={deleteVideo}
            />
          ))}
        </div>
      ) : (
        <EmptyState msg="You dont have any video in your playlist" />
      )}
    </>
  );
}
