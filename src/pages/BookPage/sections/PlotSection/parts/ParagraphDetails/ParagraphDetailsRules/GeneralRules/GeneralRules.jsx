import { useSelector } from "react-redux";
import {
  BoldIcon,
  ItalicIcon,
  UnderlinedIcon,
  StrikethroughIcon
} from "../../../../../../../../img/icons";
import { Dropdown, Textarea } from "../../../../../../../../ui-kit";
import FilesLoader from "../../../../../parts/LoaderFiles/LoaderFiles";
import styles from "./GeneralRules.module.scss";

const GeneralRules = () => {
  const { delete_image, delete_sound } = useSelector(
    (state) => state.support.modals
  );
  return (
    <>
      <Dropdown title={"Изображение"}>
        <img
          src={
            "https://images.unsplash.com/photo-1601848029242-fecf0a54e655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
          }
          alt={"book.name"}
          className={styles.image}
        />
        <FilesLoader
          modalTitle={"Удалить изображение?"}
          active={delete_image}
          typeModal={"delete_image"}
        />
      </Dropdown>
      <Dropdown title={"Текст "}>
        <div className={styles.formatting}>
          <div className={styles.formattingIcon}>
            <BoldIcon />
          </div>
          <div className={styles.formattingIcon}>
            <ItalicIcon />
          </div>
          <div className={styles.formattingIcon}>
            <UnderlinedIcon />
          </div>
          <div className={styles.formattingIcon}>
            <StrikethroughIcon />
          </div>
        </div>
        <Textarea className={styles.textarea}/>
      </Dropdown>
      <Dropdown title={"Звук"}>
        <FilesLoader
          modalTitle={"Удалить Звук?"}
          active={delete_sound}
          typeModal={"delete_sound"}
        />
      </Dropdown>
    </>
  );
};

export default GeneralRules;
