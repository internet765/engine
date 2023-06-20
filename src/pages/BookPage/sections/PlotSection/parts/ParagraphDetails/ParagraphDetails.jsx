import ParagraphDetailsHeader from "./ParagraphsDetailsHeader/ParagraphDetailsHeader";
import ParagraphDetailsRules from "./ParagraphDetailsRules/ParagraphDetailsRules";
import styles from "./ParagraphDetails.module.scss";

const ParagraphDetails = () => {
  return (
    <div className={styles.details}>
      <ParagraphDetailsHeader />
      <ParagraphDetailsRules />
    </div>
  );
};

export default ParagraphDetails;
