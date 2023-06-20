import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../../../store/booksSlice/extraReducers";
import { toggleModal } from "../../../../store/supportSlice";
import { Button } from "../../../../ui-kit";
import styles from "./Dialog.module.scss";

const Dialog = () => {
  const dispatch = useDispatch();
  const { idBookToDeleted } = useSelector((state) => state.books);

  const closeModal = () => dispatch(toggleModal("delete_book"));

  const handelDeleteBook = () => {
    dispatch(deleteBook(idBookToDeleted));
    dispatch(toggleModal("delete_book"));
  };

  return (
    <div className={styles.dialog}>
      <Button bgWhite onClick={closeModal}>
        Закрыть
      </Button>
      <Button onClick={handelDeleteBook}>Удалить</Button>
    </div>
  );
};

export default Dialog;
