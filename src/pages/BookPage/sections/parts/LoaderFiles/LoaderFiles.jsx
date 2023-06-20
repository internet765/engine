import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../../store/supportSlice";
import { TrashIcon } from "../../../../../img/icons";
import { Modal, Button, FileInput, Icon } from "../../../../../ui-kit";
import classNames from "classnames";
import styles from "./LoaderFiles.module.scss";

const LoaderFiles = ({
  label,
  modalTitle,
  modalText,
  typeModal,
  active,
  link,
}) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.loader}>
      <FileInput label={label} type={"file"} className={styles.loaderInput} />
      <Icon
        className={classNames(styles.loaderIcon, {
          [styles.loaderIconTop]: label,
        })}
        icon={<TrashIcon />}
        onClick={() => dispatch(toggleModal(typeModal))}
      />

      <Modal title={modalTitle} active={active} id={typeModal}>
        <div className={styles.loaderModal}>
          {modalText && <p className={styles.loaderModalText}>{modalText}</p>}
          <div className={styles.loaderModalButtonsRoot}>
            <Button bgWhite onClick={() => dispatch(toggleModal(typeModal))}>
              Закрыть
            </Button>
            <Button>Удалить</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoaderFiles;
