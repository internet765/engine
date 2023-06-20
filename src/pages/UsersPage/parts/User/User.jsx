import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { setIdUserToDeleted, setEditUser } from "../../../../store/userSlice";
import { Container, Icon } from "../../../../ui-kit";
import { TrashIcon } from "../../../../img/icons";
import { setUserType, getAvailableBooks } from "../../../../utils";
import styles from "./User.module.scss";

const User = ({ user }) => {
  const dispatch = useDispatch();
  const { name, email, type, books, id } = user;

  const handelOpenEditModal = () => {
    dispatch(setEditUser(user));
    dispatch(toggleModal("edit_user"));
  };

  const handelOpenDeleteModal = (e) => {
    e.stopPropagation();
    dispatch(setIdUserToDeleted(id));
    dispatch(toggleModal("delete_user"));
  };


  return (
    <Container className={styles.user} onClick={handelOpenEditModal}>
      <p className={styles.userName}>{name}</p>
      <p className={styles.userLogin}>{email}</p>
      <p className={styles.userRole}>{setUserType(type)}</p>
      {type !== "admin" && (
        <>
          <p className={styles.userBooks}>{getAvailableBooks(books)}</p>
          <Icon
            className={styles.userDel}
            icon={<TrashIcon />}
            onClick={(e) => handelOpenDeleteModal(e)}
          />
        </>
      )}
    </Container>
  );
};

export default React.memo(User);
