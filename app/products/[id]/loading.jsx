"use client";

import styles from "./loading.module.css";

function Loading() {
  return (
    <div className={styles.skeletonContainer}>
      <div className={styles.skeletonHeader}>
        <div className={styles.skeletonTitle}></div>
      </div>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonImage}></div>

        <div className={styles.skeletonInfo}>
          <div className={styles.skeletonProductName}></div>
          <div className={styles.skeletonPrice}></div>
          <div className={styles.skeletonButton}></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
