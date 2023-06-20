import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleModal } from "../../store/supportSlice";
import { setCurrentUser } from "../../store/authSlice/extraReducers";
import CreateBookFrom from "./parts/CreateBookForm/CreateBookFrom";
import Paper from "./parts/Paper/Paper";
import Dialog from "./parts/Dialog/Dialog";
import { Container, Button, Alert, Modal } from "../../ui-kit";
import styles from "./BooksPage.module.scss";

export const BooksPage = () => {
  const dispatch = useDispatch();
  const { create_book, delete_book } = useSelector((state) => state.support.modals);
  const { createBook, deleteBook } = useSelector((state) => state.books);
  const { currentUser } = useSelector((state) => state.auth);

  const handelOpenFromCreateBook = () => dispatch(toggleModal("create_book"));

  useEffect(() => {
    if (createBook || deleteBook) dispatch(setCurrentUser());
  }, [dispatch, createBook, deleteBook]);

  return (
    <section className={styles.page}>
      <Container className={styles.pageButton}>
        {currentUser.type !== "editor" && (
          <Button onClick={handelOpenFromCreateBook}>Добавить книгу</Button>
        )}
        {currentUser.books && !currentUser.books.length && (
          <Alert
            className={styles.authAlert}
            text={"Добавьте новую книгу или обратитесь к администратору"}
          />
        )}
      </Container>
      <Container className={styles.pagePapers}>
        {currentUser.books &&
          currentUser.books.map((book) => (
            <Paper
              key={book.id}
              title={book.name}
              author={book.author.name}
              date={book.creationDate}
              image={book.image}
              id={book.id}
              createBook={createBook}
            />
          ))}
      </Container>
      {create_book && (
        <Modal
          component={<CreateBookFrom />}
          active={create_book}
          id={"create_book"}
          title={"Добавить книгу"}
        />
      )}
      {delete_book && (
        <Modal
          component={<Dialog />}
          active={delete_book}
          id={"delete_book"}
          title={"Удалить книгу?"}
        />
      )}
    </section>
  );
};
