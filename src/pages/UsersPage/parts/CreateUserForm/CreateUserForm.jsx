import React, { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../../store/supportSlice";
import { createUser } from "../../../../store/userSlice";
import { getBooks } from "../../../../store/booksSlice/extraReducers";
import {
  Button,
  Input,
  Select,
  Checkbox,
  Alert,
  Textarea,
  Preloader
} from "../../../../ui-kit";
import { setUserType } from "../../../../utils";
import { options } from "../../constants";
import styles from "./CreateUserForm.module.scss";

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const { allBooks } = useSelector((state) => state.books);
  const { createUserError, reqStatus } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (user) => {
    const userBooks = !user.books ? [] : user.books;
    const newUser = {
      ...user,
      books: userBooks.map((id) => {
        return {
          id: Number(id),
        };
      }),
    };

    dispatch(createUser(newUser)).then((res) => {
      if (!res.error) {
        dispatch(toggleModal("create_user"));
        setValue("type", "");
        setValue("books", "");
        setValue("email", "");
        setValue("comment", "");
      } else {
        setError("email");
      }
    });
  };

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
        register={{ ...register("email", { required: true }) }}
        className={styles.formInput}
        invalid={errors.email}
        type={"email"}
      />
      {createUserError && <Alert text={"Неверный адрес"} />}
      <Controller
        name="type"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <Select
            labelSelect={"Роль"}
            className={styles.formSelect}
            options={options}
            selectedValue={value}
            onChangeOption={onChange}
            setDefaultLabel={setUserType}
            required={errors.type}
          />
        )}
      />
      <div className={styles.formBooks}>
        <p className={styles.formBooksTitle}>Доступные книги</p>
        <div className={styles.formBooksContainer}>
          {allBooks &&
            allBooks.map((book) => (
              <Checkbox
                id={book.id}
                key={book.id}
                value={book.id}
                label={book.name}
                checked={false}
                register={{ ...register("books") }}
              />
            ))}
        </div>
      </div>
      <Textarea
        label={"Комментарий"}
        className={styles.formTextarea}
        register={{ ...register("comment") }}
      />
      <div className={styles.formButtons}>
        <Button
          bgWhite
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleModal("create_user"));
          }}
        >
          Закрыть
        </Button>
        <Button type={"submit"}>Применить</Button>
      </div>
    </form>
  );
};

export default React.memo(CreateUserForm);
