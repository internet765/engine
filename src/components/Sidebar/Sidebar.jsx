import React from "react";
import { useSelector } from "react-redux";
import SidebarTabs from "./parts/SidebarTabs";
import { Container } from "./../../ui-kit/Container/Container";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  const { editBook } = useSelector((state) => state.books);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <h2 className={styles.title}>{editBook?.name}</h2>
      </div>
      <Container className={styles.sidebarTabs}>
        <SidebarTabs />
      </Container>
    </div>
  );
};

export default Sidebar;
