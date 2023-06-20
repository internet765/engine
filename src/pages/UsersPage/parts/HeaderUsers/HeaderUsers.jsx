import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { resetError } from "../../../../store/userSlice";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import { Container, Button, Modal } from "../../../../ui-kit";
import styles from "./HeaderUsers.module.scss";

const HeaderUsers = () => {
  const dispatch = useDispatch();
  const { create_user } = useSelector((state) => state.support.modals);

  const handelOpenAddModal = () => {
    dispatch(resetError());
    dispatch(toggleModal("create_user"));
  };

  return (
    <>
      <Container className={styles.header}>
        <p className={styles.headerTitle}>Пользователи</p>
        <Button onClick={() => handelOpenAddModal()}>
          Добавить пользователя
        </Button>
      </Container>
      {create_user && (
        <Modal
          title={"Добавление пользователя"}
          active={create_user}
          id={"create_user"}
          component={<CreateUserForm/>}
        />
      )}
    </>
  );
};

export default HeaderUsers;
