import { useSelector, useDispatch } from "react-redux";
import {
  Container,
  Input,
  Button,
  Alert,
  Modal,
  Link,
} from "../../../../ui-kit";
import { toggleModal } from "../../../../store/supportSlice";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import LoaderFiles from "../parts/LoaderFiles/LoaderFiles";
import plug from "../../../../img/plug.png";
import { API_URL } from "../../../../http";
import styles from "./SettingsSection.module.scss";

export const SettingsSection = () => {
  const editBook = useSelector((state) => state.books.editBook);
  const { delete_book, delete_image } = useSelector(
    (state) => state.support.modals
  );
  const dispatch = useDispatch();

  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.sectionTitle}>Настройки</p>
      </SectionContainer>
      <Container className={styles.sectionContainer}>
        <Alert text={"Если есть ошибки, то они выводятся тут"} />
        <Input
          label={"Название книги"}
          className={styles.sectionInput}
          placeholder={editBook.name}
        />
        {editBook.name !== "Новая книга" ? (
          <img
            src={editBook.image ? `${API_URL}/images/${editBook.image.type}/${editBook.image.filename}` : plug}
            alt={editBook.name}
            className={styles.sectionImage}
          />
        ) : (
          <img src={editBook.src ? editBook.src : plug} alt={editBook.name} className={styles.sectionImage} />
        )}
        <LoaderFiles
          label={"Обложка"}
          modalTitle={"Удалить обложку?"}
          active={delete_image}
          typeModal={"delete_image"}
        />
        <div className={styles.sectionInputRoot}>
          <Input label={"Токен"} className={styles.sectionInput} />
          <Link text={"@bot"} className={styles.sectionLink} />
        </div>
        <div className={styles.sectionButtons}>
          <Button bgWhite onClick={() => dispatch(toggleModal("delete_book"))}>
            Удалить
          </Button>
          <Button bgWhite>Сохранить</Button>
        </div>
      </Container>
      {delete_book && (
        <Modal title={"Удалить книгу?"} active={delete_book} id={"delete_book"}>
          <p className={styles.sectionModalText}>
            Все данные будут безвозвратно утеряны
          </p>
          <div className={styles.sectionModal}>
            <Button
              bgWhite
              onClick={() => dispatch(toggleModal("delete_book"))}
            >
              Закрыть
            </Button>
            <Button>Удалить</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};