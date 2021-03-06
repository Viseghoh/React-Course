import React from "react";
import styles from "./Backdrop.module.css";

const backdrop = (props) => {
  return props.visible ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
};

export default backdrop;
