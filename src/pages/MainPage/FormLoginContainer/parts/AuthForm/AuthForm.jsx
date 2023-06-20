import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toggleModal, changeForm } from "../../../../../store/supportSlice";
import { clearFlag } from "../../../../../store/authSlice/authSlice";
import { login } from "../../../../../store/authSlice/extraReducers";
import { Button, Input, PasswordInput, Alert, Link } from "../../../../../ui-kit";
import styles from "./AuthForm.module.scss";

const AuthForm = () => {

  const dispatch = useDispatch();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });
  const { loading, errorAuth, resetPassword } = useSelector((state) => state.auth);

  const handleSubmitAuth = (data) => dispatch(login(data));

  const openSendCodeForm = () => {
    dispatch(changeForm("send_code"));
    dispatch(clearFlag());
  };

  return (
    <>
      <h2 className={styles.authTitle}> Авторизация</h2>
      {resetPassword && <p className={styles.authSubtitle}>Пароль успешно изменен!</p>}
      <form className={styles.auth} onSubmit={handleSubmit(handleSubmitAuth)}>
        <div className={styles.authInputs}>
          <Input
            register={{ ...register("email", { required: true }) }}
            label={"E-mail"}
            type={"text"}
            name={"email"}
            invalid={errorAuth || errors.email}
          />
          <PasswordInput
            label={"Пароль"}
            invalid={errorAuth || errors.password}
            register={{ ...register("password", { required: true }) }} />
        </div>
        {errorAuth && (
          <Alert
            className={styles.authAlert}
            smallText={true}
            text={"Проверьте правильность введенных данных"}
          />
        )}
        <Link text={"Забыл пароль"} className={styles.authLink} onClick={openSendCodeForm} />
        <div className={styles.authButtons}>
          <Button
            bgWhite
            onClick={() => { dispatch(toggleModal("login")); }}>Закрыть
          </Button>
          <Button type={"submit"} disabled={!isValid}>Войти</Button>
        </div>
      </form>
    </>
  );
};

export default React.memo(AuthForm);
