import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { changePassword } from "../../../../store/authSlice/extraReducers";
import { Button, Alert, PasswordInput } from "../../../../ui-kit";
import styles from "./ChangePasswordForm.module.scss";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const { changePasswordError } = useSelector((state) => state.auth);

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

  const newPassword = watch("newPassword");
  const dublicate_newPassword = watch("duplicate_newPassword");
  const checkDublicate = newPassword === dublicate_newPassword;

  const handleChangePassword = (data) => {
    if (!checkDublicate) {
      setError("duplicate_newPassword");
      setError("newPassword");
    } else {
      dispatch(changePassword(data)).then((res) => {
        if (!res.error) {
          setValue("password", "");
          setValue("newPassword", "");
          setValue("duplicate_newPassword", "");
        }
      });
    }
  };

  return (
    <div className={styles.change}>
      <h2 className={styles.changeTitle}>Сменить пароль</h2>
      <form
        className={styles.changeForm}
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <div className={styles.changeInputOld}>
          <PasswordInput
            register={{ ...register("password", { required: true }) }}
            label={"Старый пароль"}
            type={"text"}
            name={"code"}
            invalid={changePasswordError || errors.password}
          />
          {changePasswordError && (
            <Alert
              className={styles.changeAlert}
              smallText={true}
              text={"Указан некорректный пароль"}
            />
          )}
        </div>
        <div className={styles.changeInputsNew}>
          <PasswordInput
            label={"Новый пароль"}
            invalid={errors.newPassword}
            register={{ ...register("newPassword", { required: true }) }}
            minLength={6}
            maxLength={10}
          />
          <PasswordInput
            label={"Еще раз"}
            invalid={errors.duplicate_newPassword}
            register={{
              ...register("duplicate_newPassword", { required: true }),
            }}
            minLength={6}
            maxLength={10}
          />
        </div>
        {errors.newPassword && errors.duplicate_newPassword && (
          <Alert
            className={styles.changeAlert}
            smallText={true}
            text={"Пароли не совпадают"}
          />
        )}
        <div className={styles.changeButtons}>
          <Button type={"submit"} disabled={!isValid}>
            Сменить пароль
          </Button>
        </div>
      </form>
    </div>
  );
};

export default React.memo(ChangePasswordForm);
