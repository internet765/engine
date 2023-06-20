import { Input, Icon } from "../../../../../../../../ui-kit";
import { SectionContainer } from "../../../../../parts/SectionContainer/SectionContainer";
import { ArrowRIcon } from "../../../../../../../../img/icons";
import styles from "./RandomRules.module.scss";

const Random = () => {
  return (
    <SectionContainer className={styles.randomContainer}>
      <p className={styles.randomName}>Случайность 1</p>
      <div className={styles.randomChain}>
        <span>#</span>
        <Input type={"number"} className={styles.randomChainParagraph} />
        <Icon icon={<ArrowRIcon />} />
      </div>
    </SectionContainer>
  );
};

export default Random;
