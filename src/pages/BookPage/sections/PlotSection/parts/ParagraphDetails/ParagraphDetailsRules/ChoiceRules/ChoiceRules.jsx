import GeneralRules from "../GeneralRules/GeneralRules";
import { SectionContainer } from "../../../../../parts/SectionContainer/SectionContainer";
import { Button } from "../../../../../../../../ui-kit";
import Choice from "./Choice";
import styles from "./ChoiceRules.module.scss";

const ChoiceRules = () => {
  return (
    <>
      <GeneralRules />
      <div className={styles.choice}>
        <Choice />
        <SectionContainer className={styles.choiceButton}>
          <Button bgWhite>+ Добавить действие</Button>
        </SectionContainer>
      </div>
    </>
  );
};

export default ChoiceRules;
