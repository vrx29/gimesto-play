import React from "react";
import styles from "./style.module.css";
import { ErrorImg } from "assets/shared";

export function Error404() {
  return (
    <div className={styles.cont}>
      <img src={ErrorImg} alt="error" />
    </div>
  );
}
