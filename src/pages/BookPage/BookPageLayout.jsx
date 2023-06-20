import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBook } from "../../store/booksSlice/extraReducers";
import { Outlet, useParams, useNavigate } from "react-router-dom";
import { Container } from "../../ui-kit";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./BookPageLayout.module.scss";

export const BookPageLayout = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = parseInt(params.book_id?.match(/\d+/));

  useEffect(() => {
    dispatch(getBook(id)).then((res) => res.error && navigate("/books"));
  }, []);

  return (
    <section className={styles.page}>
      <Sidebar />
      <Container className={styles.pageContainer}>
        <Outlet />
      </Container>
    </section>
  );
};
