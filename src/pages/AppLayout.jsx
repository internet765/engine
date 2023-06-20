import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Container } from "./../ui-kit/Container/Container";
import styles from "./AppLayout.module.scss";

export const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Container  className={styles.container}>
        <Outlet />
      </Container>
    </>
  );
};
