// import { Container, Input, Button, Modal, Link } from "../../../../ui-kit";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import styles from "./SoundsSection.module.scss";
import Plug from "../parts/Plug/Plug";

export const SoundsSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.title}>Звуки</p>
      </SectionContainer>
      {/* тут будет реальная проверка на наличие изображений  */}
      <Plug title={"Не загружено ни одного звука"}/>
    </div>
  );
};
