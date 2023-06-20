import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { changeEmail } from "../../../../store/authSlice/extraReducers";
import { Button, Alert, Input } from "../../../../ui-kit";
import styles from "./ChangeEmailForm.module.scss";

const ChangePasswordForm = () => {
  const dispatch = useDispatch();
  const { changeEmailError } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const handleChangePassword = (email) => {
    dispatch(changeEmail(email.email)).then((res) => {
      if (!res.error) {
        setValue("email", "");
        localStorage.setItem("email", JSON.stringify(email.email));
      }
    });
  };

  return (
    <div className={styles.change}>
      <h2 className={styles.changeTitle}>Сменить e-mail</h2>
      <form
        className={styles.changeForm}
        onSubmit={handleSubmit(handleChangePassword)}
      >
        <Input
          register={{ ...register("email", { required: true }) }}
          label={"Новый e-mail"}
          type={"text"}
          name={"code"}
          invalid={changeEmailError || errors.email}
        />
        {changeEmailError && (
          <Alert
            className={styles.changeAlert}
            smallText={true}
            text={"Указан некорректный e-mail"}
          />
        )}
        <Button
          className={styles.changeButton}
          type={"submit"}
          disabled={!isValid}
        >
          Сменить e-mail
        </Button>
      </form>
    </div>
  );
};

export default React.memo(ChangePasswordForm);
