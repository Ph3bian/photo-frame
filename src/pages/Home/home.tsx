import React from "react";
import styles from "./home.module.scss";
const Home: React.FC  = () => {
  return (
    <div className={styles.Home}>
      <div className={styles.controls}></div>
      <div className={styles.container}>
        <div className={styles.containerBody}>
          <h1>Upload Image</h1>
        </div>
      </div>
    </div>
  );
};
export default Home;
