import React from "react";
import style from "./style.module.scss";

export const LoadingDots = () => {
  return (
    <div className={style.loadingDots}>
      <div className={style.dotPulse} />
    </div>
  );
};
