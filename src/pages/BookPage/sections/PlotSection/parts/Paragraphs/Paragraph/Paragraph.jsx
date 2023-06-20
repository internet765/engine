import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import { AlertIcon } from "../../../../../../../img/icons/AlertIcon";
import styles from "./Paragraph.module.scss";

const Paragraph = ({ number, name, error }) => {
  return (
    <SectionContainer className={styles.paragraph}>
      <span className={styles.paragraphNumber}>{number}</span>
      <p className={styles.paragraphName}>{`${name} ${"#"} ${number}`}</p>
      {error && (
        <div className={styles.paragraphAlert}>
          <AlertIcon />
        </div>
      )}
    </SectionContainer>
  );
};

export default Paragraph;
