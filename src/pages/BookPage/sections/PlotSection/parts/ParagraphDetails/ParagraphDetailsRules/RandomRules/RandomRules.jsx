import GeneralRules from "../GeneralRules/GeneralRules";
import { SectionContainer } from "../../../../../parts/SectionContainer/SectionContainer";
import { Button } from "../../../../../../../../ui-kit";
import Random from "./Random";
import styles from "./RandomRules.module.scss";

const RandomRules = () => {
  return (
    <>
      <GeneralRules />
      <div className={styles.random}>
        <Random />
        <Random />
        <Random />
        <SectionContainer className={styles.randomButton}>
          <Button bgWhite>+ Добавить случайность</Button>
        </SectionContainer>
      </div>
    </>
  );
};

export default RandomRules;
