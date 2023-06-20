import { useState } from "react";
import classNames from "classnames";
import { TriangleDownIcon, TriangleUpIcon } from "../../img/icons";
import styles from "./Dropdown.module.scss";

export const Dropdown = ({ title, children }) => {
  const [isActive, setActive] = useState(false);

  return (
    <div className={styles.dropdown} onClick={() => setActive(!isActive)}>
      <div className={styles.dropdownHeader}>
        <p>{title}</p>
        <div className={styles.dropdownHeaderControl}>
          {!isActive ? <TriangleDownIcon /> : <TriangleUpIcon />}
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={classNames(styles.dropdownContent, {
          [styles.dropdownContentActive]: isActive
        })}
      >
        {children}
      </div>
    </div>
  );
};
