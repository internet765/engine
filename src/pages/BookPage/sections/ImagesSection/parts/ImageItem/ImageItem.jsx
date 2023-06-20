import { useSelector } from "react-redux";
import LoaderFiles from "../../../parts/LoaderFiles/LoaderFiles";
import { Link } from "../../../../../../ui-kit";
import styles from "./ImageItem.module.scss";

const ImageItem = ({ link, src }) => {
  const { delete_image } = useSelector((state) => state.support.modals);
  return (
    <div className={styles.item}>
      <Link text={link} />
      <img
        src={src}
        alt={"book.name"}
        className={styles.itemImage}
      />
      {<LoaderFiles
        modalTitle={"Удалить изображение?"}
        modalText={"Публикация в параграфе будет отменена"}
        active={delete_image}
        typeModal={"delete_image"}
        link={link}
      />}
    </div>
  );
};

export default ImageItem;