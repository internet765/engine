import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toggleModal, changeForm } from "../../store/supportSlice";
import { clearFlag } from "../../store/authSlice/authSlice";
import { Input, Modal, Textarea, Button } from "../../ui-kit";
import { LogoIcon, LogoBigIcon } from "../../img/icons";
import FormsLoginContainer from "./FormLoginContainer/FormLoginContainer";
import styles from "./MainPage.module.scss";

export const MainPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth } = useSelector((state) => state.auth);
  const { login } = useSelector((state) => state.support.modals);
  const { state } = useLocation();

  useEffect(() => {
    if (isAuth) {
      navigate(state === null ? "books" : state.from, { replace: false });
      dispatch(toggleModal("login"));
    }
  }, [navigate, isAuth, state]);

  const openLoginModal = () => {
    dispatch(toggleModal("login"));
    dispatch(changeForm("auth"));
    dispatch(clearFlag());
  };

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <div className={styles.pageNavbar}>
          <div className={styles.pageNavbarLogo}>
            <LogoIcon />
          </div>
          <button onClick={openLoginModal} className={styles.pageNavbarButton}>
            Войти
          </button>
        </div>
      </header>
      <div className={styles.pageBanner}>
        <div className={styles.pageBannerContainer}>
          <LogoBigIcon />
          <Button onClick={openLoginModal}>Войти</Button>
        </div>
      </div>
      <main className={styles.pageMain}>
        <section className={styles.pageMainAboutSection}>
          <div className={styles.pageMainAboutSectionContainer}>
            <h2 className={styles.pageMainAboutSectionTitle}>О нас</h2>
            <div className={styles.pageMainAboutSectionText}>
              <p>
                engine - это инструмент для создания текстовых квестов на базе
                мессенджера telegram
              </p>
              <p>Данная страница создана для авторов и дает доступ к движку </p>
            </div>
          </div>
        </section>
        <section className={styles.pageMainWriteSection}>
          <div className={styles.pageMainWriteSectionBanner}>
            <div className={styles.pageMainWriteSectionContainer}>
              <div className={styles.pageMainWriteSectionText}>
                <h2>Напишите</h2>
                <p>
                  если у вас есть вопросы, или вы хотите начать создавать
                  собственные квесты
                </p>
              </div>
              <form className={styles.pageMainWriteSectionForm}>
                <Input label={"Ваш e-mail"} />
                <Input label={"Имя"} />
                <Textarea label={"Сообщение"} />
                <Button>Отправить</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.pageMainFooter}>
        <p>engine, 2022</p>
      </footer>
      {login && (
        <Modal
          className={styles.modal}
          component={<FormsLoginContainer />}
          active={login}
          id={"login"}
        />
      )}
    </div>
  );
};
