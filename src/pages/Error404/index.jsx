import React from "react";
import styles from "./style.module.css";
import { ErrorImg } from "assets/shared";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <div className={styles.cont}>
      <img src={ErrorImg} alt="error" loading="lazy" />
      <Link to="/">
        <button className="btn btn-primary">Go back home</button>
      </Link>
    </div>
  );
}
