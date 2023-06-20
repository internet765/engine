import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormData from "form-data";
import { toggleModal } from "../../../../store/supportSlice";
import {
  createBook,
  uploadBookImage,
} from "../../../../store/booksSlice/extraReducers";
import { Button, Input } from "../../../../ui-kit";
import plug from "../../../../img/plug.png";
import styles from "./CreateBookFrom.module.scss";

const CreateBookFrom = () => {
  const dispatch = useDispatch();
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const { currentUser } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = (book) => {
    const formData = new FormData();
    formData.append("file", book.picture[0]);

    if (book.picture.length) {
      dispatch(uploadBookImage(formData)).then((res) => {
        if (!res.payload.error) {
          dispatch(
            createBook({
              name: book.name,
              editor: currentUser.id,
              image: res.payload,
            })
          ).then((res) => {
            if (!res.error) {
              setValue("name", "");
              dispatch(toggleModal("create_book"));
            }
          });
        }
      });
    } else {
      dispatch(createBook({ name: book.name, editor: currentUser.id })).then((res) => {
        if (!res.error) {
          setValue("name", "");
          dispatch(toggleModal("create_book"));
        }
      });
    }
  };

  useEffect(() => {
    if (selectedImage) setImageUrl(URL.createObjectURL(selectedImage));
  }, [selectedImage]);

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)} className={styles.form}>
      <div className={styles.formImage}
        onChange={(e) => setSelectedImage(e.target.files[0])}

      >
        <img src={imageUrl ? imageUrl : plug} />
        <input
          type="file"
          accept="image/*, .png, .jpg, .gif, .web"
          {...register("picture")}
        />
      </div>
      <div className={styles.formInputs}>
        <Input
          label={"Название книги"}
          register={{ ...register("name", { required: true }) }}
          className={styles.formInput}
          invalid={errors.name}
          maxLength={34}
          minLength={4}
        />
        {currentUser.type === "admin" && (
          <Input label={"Токен"} className={styles.formInput} disabled />
        )}
      </div>
      <div className={styles.formButtons}>
        <Button
          bgWhite
          onClick={(e) => {
            e.preventDefault();
            dispatch(toggleModal("create_book"));
          }}
        >
          Закрыть
        </Button>
        <Button type={"submit"}>Добавить</Button>
      </div>
    </form>
  );
};

export default CreateBookFrom;
