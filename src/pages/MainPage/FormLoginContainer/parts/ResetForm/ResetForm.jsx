import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { toggleModal, changeForm } from "../../../../../store/supportSlice";
import {
  sendCode,
  resetPassword,
} from "../../../../../store/authSlice/extraReducers";
import { timerFormatting } from "../../../../../utils";
import {
  Button,
  Alert,
  Preloader,
  Link,
  Input,
  PasswordInput,
} from "../../../../../ui-kit";
import styles from "./ResetForm.module.scss";

const ResetForm = () => {
  const [timer, setTimer] = useState(30);
  const { loading, email, resetPasswordError } =
    useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    setError,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const countdown = timerFormatting(timer);
  const password = watch("password");
  const duplicate_password = watch("duplicate_password");
  const checkDublicate = password === duplicate_password;

  const handleResetPassword = (data) => {
    if (!checkDublicate) {
      setError("password");
      setError("duplicate_password");
    }else {
      dispatch(resetPassword(data)).then((res) => {
        if (!res.error) {
          dispatch(changeForm("auth"));
        }
      });
    }
 
  };

  const sendCodeAgain = () => {
    dispatch(sendCode(email));
    setValue("code", "");
    setTimer(30);
  };

  useEffect(() => {
    const count = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    return () => clearInterval(count);
  }, [timer]);

  return (
    <>
      <h2 className={styles.recoveryTitle}>Восстановление пароля</h2>
      <p className={styles.recoverySubtitle}>
        На почту отправлен код восстановления
      </p>
      <form
        className={styles.recovery}
        onSubmit={handleSubmit(handleResetPassword)}
      >
        <div className={styles.recoveryTimer}>
          {timer !== 0 && (
            <Link text={countdown} className={styles.recoveryCount} disabled />
          )}
          <Link
            text={"Отправить еще раз"}
            disabled={timer !== 0}
            onClick={sendCodeAgain}
          />
        </div>
        <div className={styles.recoveryInputCode}>
          <Input
            register={{ ...register("code", { required: true }) }}
            label={"Код восстановления"}
            type={"text"}
            name={"code"}
            invalid={resetPasswordError || errors.code}
          />
          {resetPasswordError && (
            <Alert
              className={styles.recoveryAlert}
              smallText={true}
              text={"Указан некорректный код"}
            />
          )}
        </div>
        <div className={styles.recoveryInputs}>
          <PasswordInput
            minLength={6}
            maxLength={10}
            label={"Новый пароль"}
            invalid={errors.password}
            register={{ ...register("password", { required: true }) }}
          />
          <PasswordInput
            minLength={6}
            maxLength={10}
            label={"Еще раз"}
            invalid={errors.duplicate_password}
            register={{ ...register("duplicate_password", { required: true }) }}
          />
        </div>
        {errors.password && errors.duplicate_password && (
          <Alert
            className={styles.recoveryAlert}
            smallText={true}
            text={"Пароли не совпадают"}
          />
        )}

        <div className={styles.recoveryButtons}>
          <Button
            bgWhite
            onClick={() => {
              dispatch(toggleModal("login"));
            }}
          >
            Закрыть
          </Button>
          <Button type={"submit"} disabled={!isValid}>
            Сохранить
          </Button>
        </div>
      </form>
      {loading && !resetPasswordError && <Preloader />}
    </>
  );
};

export default React.memo(ResetForm);
