import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFlag } from "../../store/authSlice/authSlice";
import Header from "./parts/Header/Header";
import ChangePasswordForm from "./parts/ChangePasswordForm/ChangePasswordForm";
import ChangeEmailForm from "./parts/ChangeEmailForm/ChangeEmailForm";
import { Container, Preloader, Toast } from "../../ui-kit";
import styles from "./ProfilePage.module.scss";

export const ProfilePage = () => {
  const dispatch = useDispatch();

  const { currentUser } = useSelector((state) => state.user);
  const { loading, changedPassword, changedEmail, approvedChangeEmail } =
    useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(clearFlag());
  }, []);

  return (
    <section className={styles.page}>
      <Header />
      <Container className={styles.pageProfile}>
        <Container className={styles.pageProfileForms}>
          <ChangePasswordForm />
          <ChangeEmailForm />
        </Container>
        <Container className={styles.pageToasts}>
          {changedPassword && (
            <Toast title={"Пароль успешно изменен"} show={changedPassword} />
          )}
          {changedEmail && (
            <Toast
              title={`На почту ${currentUser?.email} отправлена ссылка для подтверждения`}
              show={changedEmail}
            />
          )}
          {approvedChangeEmail && (
            <Toast
              title={"E-mail успешно изменен"}
              show={approvedChangeEmail}
            />
          )}
        </Container>
      </Container>

      {loading && <Preloader />}
    </section>
  );
};
