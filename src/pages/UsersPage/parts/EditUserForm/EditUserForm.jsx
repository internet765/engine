import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { getBooks } from "../../../../store/booksSlice/extraReducers";
import { updateUser } from "../../../../store/userSlice";
import { Button, Input, Select, Checkbox, Textarea, Preloader } from "../../../../ui-kit";
import { setUserType } from "../../../../utils";
import { options } from "../../constants";
import classNames from "classnames";
import styles from "./EditUserForm.module.scss";

const EditUserForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    control,
    formState: { errors },
  } = useForm();

  const { allBooks } = useSelector((state) => state.books);
  const {
    editUser: { type, name, books, id, email, comment }, reqStatus
  } = useSelector((state) => state.user);


  const handleSubmitForm = (user) => {

    const userBooks = !user.books ? [] : user.books;

    const editUser = {
      ...user,
      books: userBooks.map((id) => {
        return {
          id: Number(id),
        };
      }),
    };

    dispatch(updateUser({id, editUser})).then((res) => {
      if (!res.error) dispatch(toggleModal("edit_user"));
    });
  };

  const checkBooks = (id, books) => {
    for (let i = 0; i < books.length; i++) {
      if (books[i].id === id) return true;
    }
    return false;
  };

  useEffect(() => {
    clearErrors();
    setValue("type", type);
    setValue("email", email);
    setValue("name", name);
    setValue("comment", comment);
    dispatch(getBooks());
  }, [type, books, comment, email, setValue]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
      {reqStatus && <Preloader />}
      <Input
        label={"Имя пользователя"}
        register={{ ...register("name", { required: true }) }}
        className={styles.formInput}
        invalid={errors.name}
        maxLength={25}
        type={"text"}
      />
      <Input
        label={"Почта"}
        register={{ ...register("email") }}
        className={styles.formInput}
        invalid={errors.email}
        type={"email"}
        disabled
      />
      <Controller
        name="type"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange } }) => (
          <Select
            labelSelect={"Роль"}
            className={styles.formSelect}
            disabled={type === "admin"}
            options={options}
            selectedValue={setUserType(type)}
            onChangeOption={onChange}
            setDefaultLabel={setUserType}
            required={errors.type}
          />
        )}
      />
      <Textarea
        label={"Комментарий"}
        className={styles.formTextarea}
        register={{ ...register("comment") }}
      />
      <div
        className={classNames(styles.formBooks, {
          [styles.formBooksDisabled]: type === "admin",
        })}
      >
        <p className={styles.formBooksTitle}>Доступные книги</p>
        <div className={styles.formBooksContainer}>
          {allBooks &&
            allBooks.map((book) => (
              <Checkbox
                id={book.id}
                key={book.id}
                value={book.id}
                label={book.name}
                checked={checkBooks(book.id, books)}
                register={{ ...register("books") }}
              />
            ))}
        </div>
      </div>
      <div className={styles.formButtons}>
        <Button
          bgWhite
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleModal("edit_user"));
          }}
        >
          Закрыть
        </Button>
        <Button type={"submit"}>Применить</Button>
      </div>
    </form>
  );
};

export default React.memo(EditUserForm);
