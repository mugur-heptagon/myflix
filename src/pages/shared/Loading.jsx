import React from "react";
import Styles from "./shared.module.scss";
import Icons from "constants/icons";

const Loading = (props) => {
  return props.visible ? (
    <div className={Styles.loading}>
      <img src={Icons.LoadingSpinner} alt="loading" width={50} />
    </div>
  ) : null;
};

export default Loading;
