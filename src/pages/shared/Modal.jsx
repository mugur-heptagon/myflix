import React from "react";
import Styles from "./shared.module.scss";

const Modal = (props) => {
  return props.visible ? (
    <div className={Styles.modal}>{props.children}</div>
  ) : null;
};

export default Modal;
