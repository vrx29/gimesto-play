import React from "react";
import styles from "./style.module.css";
import { SideBar } from "components/SideBar";
import { Outlet } from "react-router";

export function Home() {
  return (
    <main>
      <SideBar />
      <section className={styles.contentSection}>
        <Outlet />
      </section>
    </main>
  );
}
