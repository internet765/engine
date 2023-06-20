import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../../../store/userSlice";
import { toggleModal } from "../../../../store/supportSlice";
import { Button } from "../../../../ui-kit";
import styles from "./Dialog.module.scss";

const Dialog = () => {
  const dispatch = useDispatch();
  const { idUserToDeleted } = useSelector((state) => state.user);

  const closeModal = () => dispatch(toggleModal("delete_user"));

  const handelDeleteUser = () => {
    dispatch(deleteUser(idUserToDeleted));
    dispatch(toggleModal("delete_user"));
  };

  return (
    <div className={styles.dialog}>
      <Button bgWhite onClick={closeModal}>
        Закрыть
      </Button>
      <Button onClick={handelDeleteUser}>Удалить</Button>
    </div>
  );
};

export default Dialog;
