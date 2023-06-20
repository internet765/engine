import { Input, Icon } from "../../../../../../../../ui-kit";
import { SectionContainer } from "../../../../../parts/SectionContainer/SectionContainer";
import styles from "./ChoiceRules.module.scss";
import { ArrowRIcon } from "../../../../../../../../img/icons";

const Choice = () => {
  return (
    <SectionContainer className={styles.choiceContainer}>
      <Input type={"text"} className={styles.choiceName} />
      <div className={styles.choiceChain}>
        <span>#</span>
        <Input type={"number"} className={styles.choiceChainParagraph} />
        <Icon icon={<ArrowRIcon />} />
      </div>
    </SectionContainer>
  );
};

export default Choice;
