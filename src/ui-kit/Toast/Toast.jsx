import React, { useState, useEffect } from "react";
import { CloseIcon } from "../../img/icons";
import classNames from "classnames";
import styles from "./Toast.module.scss";

export const Toast = ({ title, show }) => {
  const [showToast, setShowToast] = useState(show);

  useEffect(() => {
    const count = setInterval(() => setShowToast(false), 5000);
    return () => clearInterval(count);
  }, [showToast]);

  return (
    <div
      className={classNames(styles.toast, { [styles.toastShow]: showToast })}
    >
      <p>{title}</p>
      <div
        className={styles.icon}
        onClick={() => setShowToast((prev) => !prev)}
      >
        <CloseIcon />
      </div>
    </div>
  );
};
