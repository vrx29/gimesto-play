import React from "react";
import styles from "./style.module.css";
import banner from "assets/banners/kratos.png";
import profile from "assets/banners/profile.jpeg";
export function Banner() {
  return (
    <div className={styles.banner}>
      <span className={styles.videoTime}>12 min</span>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>
          God Of War - The Story Behind Kratos - (Greek Mythology)
        </h2>
        <div className={styles.profileInfo}>
          <span>
            <img
              className={styles.profileImg}
              src={profile}
              alt="banner"
              loading="lazy"
            />
          </span>
          <div>
            <p>Thompson Jake</p>
            <p className={styles.videoStats}>54K views &#xb7; 2 weeks ago</p>
          </div>
        </div>
      </div>
      <div className={styles.bannerImage}>
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
}
