import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "../../hooks/useQuery";
import { approveChangeEmail } from "../../store/authSlice/extraReducers";
import { Container, Button, Preloader, Alert } from "../../ui-kit";
import styles from "./ChangeEmailPage.module.scss";

export const ChangeEmailPage = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = JSON.parse(localStorage.getItem("email"));
  const { loading, approveChangeEmailError } = useSelector(
    (state) => state.auth
  );

  const sendApproveCode = () => {
    dispatch(approveChangeEmail(query.get("code"))).then((res) => {
      if (!res.error) {
        localStorage.removeItem("email");
        navigate("/profile", { replace: true });
      }
    });
  };

  const pushOnBookPage = () => {
    localStorage.removeItem("email");
    navigate("/books", { replace: true });
  };

  if (loading) {
    return <Preloader />;
  }

  return (
    <Container className={styles.page}>
      <Container className={styles.pageContainer}>
        <p className={styles.pageText}>
          Изменить e-mail на{" "}
          <span className={styles.pageTextSpan}>{email}</span> ?
        </p>
        <Container className={styles.pageButtons}>
          <Button bgWhite onClick={pushOnBookPage}>
            Отменить
          </Button>
          <Button onClick={sendApproveCode}>Подтвердить</Button>
        </Container>
        {approveChangeEmailError && <Alert text={"Что-то пошло не так..."} />}
      </Container>
    </Container>
  );
};
