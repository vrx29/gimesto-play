import React from "react";
import styles from "./style.module.css";
import { VideoPlayer } from "assets/shared";
import { Link } from "react-router-dom";

export function EmptyState({ msg }) {
  return (
    <div className={styles.cont}>
      <img src={VideoPlayer} alt="Video Player Icon" />
      <p>{msg}</p>
      <Link to="/">
        <button className="btn btn-primary">Browse videos</button>
      </Link>
    </div>
  );
}
