import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toggleModal, changeForm } from "../../../../../store/supportSlice";
import { sendCode } from "../../../../../store/authSlice/extraReducers";
import { Button, Input, Alert, Preloader } from "../../../../../ui-kit";
import styles from "./SendCodeForm.module.scss";

const SendCodeForm = () => {

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({
    mode: "onChange"
  });

  const dispatch = useDispatch();
  const { loading, resetPasswordCodeError } = useSelector((state) => state.auth);

  const handleSendCode = (email) => {
    dispatch(sendCode(email.email)).then((res) => {
      if (!res.error) {
        dispatch(changeForm("reset_password"));
      }
    });
  };

  return (
    <>
      <h2 className={styles.recoveryTitle}>Восстановление пароля</h2>
      <form className={styles.recovery} onSubmit={handleSubmit(handleSendCode)}>
        <Input
          register={{ ...register("email", { required: true }) }}
          label={"E-mail"}
          type={"text"}
          name={"email"}
          invalid={resetPasswordCodeError || errors.email}
        />
        {resetPasswordCodeError && (
          <Alert
            className={styles.recoveryAlert}
            smallText={true}
            text={"Указан некорректный e-mail"}
          />
        )}
        <div className={styles.recoveryButtons}>
          <Button
            bgWhite
            onClick={() => { dispatch(toggleModal("login")); }}>Закрыть
          </Button>
          <Button type={"submit"} disabled={!isValid}>Отправить</Button>
        </div>
      </form>
      {loading && !resetPasswordCodeError && <Preloader />}
    </>
  );
};

export default React.memo(SendCodeForm);