import React from "react";
import { NavLink, useParams } from "react-router-dom";
import styles from "../Sidebar.module.scss";

const SidebarTabs = ({ name, link, icon, disabled }) => {
  const { book_id } = useParams();

  const setActive = ({ isActive }) => {
    if (isActive) {
      return `${styles.tab} ${styles.tabActive}`;
    } else if (disabled) {
      return `${styles.tab} ${styles.tabDisabled}`;
    } else {
      return `${styles.tab}`;
    }
  };

  return (
    <NavLink
      className={setActive}
      to={`books/${book_id}/${link}`}
      onClick={(event) => disabled && event.preventDefault()}
    >
      <div className={styles.tabIcon}>{icon}</div>
      <p className={styles.tabText}>{name}</p>
    </NavLink>
  );
};

export default SidebarTabs;
