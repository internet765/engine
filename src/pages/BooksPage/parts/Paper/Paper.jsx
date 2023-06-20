import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setIdBookToDeleted } from "../../../../store/booksSlice/booksSlice";
import { toggleModal } from "../../../../store/supportSlice";
import { Icon } from "../../../../ui-kit";
import { FlagIcon } from "../../../../img/icons";
import { API_URL } from "../../../../http";
import plug from "../../../../img/plug.png";
import rollingPlug from "../../../../img/pic_loader.png";
import styles from "./Paper.module.scss";

const Paper = ({ image, title, author, date, id }) => {
  const [loadImage, setLoadImage] = useState(rollingPlug);

  const dispatch = useDispatch();

  const handelOpenDeleteModal = (e) => {
    e.preventDefault();
    dispatch(setIdBookToDeleted(id));
    dispatch(toggleModal("delete_book"));
  };

  const today = new Date().toLocaleDateString();
  const creationDay = new Date(date).toLocaleDateString();

  return (
    <Link className={styles.paper} to={`book_${id}/`}>
      {today === creationDay && <Icon active icon={<FlagIcon />} className={styles.paperFlag} />}
      <div className={styles.paperWrapper}>
        <img
          className={styles.paperImg}
          src={image ? loadImage : plug}
          alt={`Карточка ${title}`}
          onLoad={() => setLoadImage(`${API_URL}/images/${image?.type}/${image?.filename}`)}
        />
      </div>
      <h2 className={styles.paperTitle}>{title}</h2>
      <p className={styles.paperAuthor}>{author}</p>
      <p className={styles.paperDate}>{creationDay}</p>
      <p
        onClick={(e) => handelOpenDeleteModal(e)}
        className={styles.paperLink}
      >{"Удалить"}</p>
    </Link>
  );
};

export default Paper;
