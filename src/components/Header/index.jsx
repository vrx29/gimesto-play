import React from "react";
import styles from "./style.module.css";
import logo from "assets/logo/logo.png";
import { Search } from "assets/icons";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Gimesto logo" />
      <div className={styles.rightCont}>
        <div className={styles.searchCont}>
          <input className={styles.searchInput} placeholder="Search" />
          <Search />
        </div>
        <Link to="login">
          <button className="btn btn-primary">Log in</button>
        </Link>
      </div>
    </header>
  );
}
