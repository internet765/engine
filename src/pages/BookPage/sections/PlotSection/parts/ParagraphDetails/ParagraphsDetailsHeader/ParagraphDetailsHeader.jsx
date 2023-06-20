import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../../../../store/supportSlice";
import { Modal, Button, Icon } from "./../../../../../../../ui-kit";
import { SectionContainer } from "../../../../parts/SectionContainer/SectionContainer";
import {
  TrashIcon,
  ArrowLeftIcon,
  SaveIcon,
} from "../../../../../../../img/icons";
import styles from "./ParagraphDetailsHeader.module.scss";

const ParagraphDetailsHeader = () => {
  const dispatch = useDispatch();
  const { delete_paragraphs } = useSelector((state) => state.support.modals);

  return (
    <SectionContainer className={styles.header}>
      <Icon className={styles.headerArrowL} icon={<ArrowLeftIcon />} />
      <span className={styles.headerParagraphNumber}>{1}</span>
      <p
        className={styles.headerParagraphName}
      >{`${"Параграф"} ${"#"} ${1}`}</p>
      <div className={styles.headerParagraphIcons}>
        <Icon className={styles.headerParagraphSave} icon={<SaveIcon />} />
        <Icon
          className={styles.headerParagraphRemove}
          icon={<TrashIcon />}
          onClick={() => dispatch(toggleModal("delete_paragraphs"))}
          disabled
        />
      </div>
      <Modal
        title={"Удалить параграф?"}
        active={delete_paragraphs}
        id={"delete_paragraphs"}
      >
        <div className={styles.headerModalButtonsRoot}>
          <Button
            bgWhite
            onClick={() => dispatch(toggleModal("delete_paragraphs"))}
          >
            Закрыть
          </Button>
          <Button>Удалить</Button>
        </div>
      </Modal>
    </SectionContainer>
  );
};

export default ParagraphDetailsHeader;
