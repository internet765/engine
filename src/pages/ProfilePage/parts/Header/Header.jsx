import { Container } from "../../../../ui-kit";
import styles from "./Header.module.scss";

const Header = () => {

  return (
    <Container className={styles.header}>
      <p className={styles.headerTitle}>Личный кабинет</p>
    </Container>
  );
};

export default Header;
