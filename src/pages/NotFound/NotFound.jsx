import { Container } from "../../ui-kit";
import error from "./404.png";

import styles from "./NotFound.module.scss";

export const NotFound = () => {
  return (
    <Container className={styles.page}>
      <div className={styles.pageContainer}>
        <img className={styles.pageImage} src={error} alt="Pikachu 404" />
        <h2 className={styles.pageError}>404</h2>
      </div>
    </Container>
  );
};
