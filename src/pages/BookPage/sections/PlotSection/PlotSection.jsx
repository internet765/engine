import Paragraphs from "./parts/Paragraphs/Paragraphs";
import ParagraphDetails from "./parts/ParagraphDetails/ParagraphDetails";
import styles from "./PlotSection.module.scss";

export const PlotSection = () => {
  return <div className={styles.section}>
    <Paragraphs />
    <ParagraphDetails />
  </div>;
};
