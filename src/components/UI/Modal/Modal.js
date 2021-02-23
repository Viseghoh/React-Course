import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = (props) => {
  return (
    <Aux>
      <Backdrop visible={props.visible} clicked={props.modalClosed} />
      <div
        className={styles.Modal}
        style={{
          transform: props.visible ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.visible ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
