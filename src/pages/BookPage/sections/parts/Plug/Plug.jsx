import { Container } from "../../../../../ui-kit";
import styles from "./Plug.module.scss";

const Plug = ({ title }) => {
  return (
    <Container className={styles.plug}>
      <p className={styles.plugText}>{title}</p>
    </Container>
  );
};

export default Plug;
