import classNames from "classnames";
import {
  AddPlaylist,
  EmptyState,
  PlaylistCard,
  PlaylistLoader,
} from "components";
import { usePlaylist } from "context";
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export function Playlist() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { playlists, loading, getPlaylists, deletePlaylist } = usePlaylist();

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <>
      <div className={styles.headCont}>
        <h2>Playlist</h2>
        <button
          className={classNames("btn", "outline-primary")}
          onClick={() => setIsOpenModal(true)}
        >
          Create New
        </button>
      </div>
      {isOpenModal && (
        <AddPlaylist title="Create Playlist" handleModal={setIsOpenModal} />
      )}

      {loading ? (
        <div className={styles.playlistCont}>
          {new Array(10).fill().map((_, indx) => (
            <PlaylistLoader key={indx} />
          ))}
        </div>
      ) : playlists.length > 0 ? (
        <div className={styles.playlistCont}>
          {playlists.map((item) => (
            <PlaylistCard
              key={item._id}
              playlist={item}
              deletePlaylist={deletePlaylist}
            />
          ))}
        </div>
      ) : (
        <EmptyState msg="You haven't created any playlist" />
      )}
    </>
  );
}
