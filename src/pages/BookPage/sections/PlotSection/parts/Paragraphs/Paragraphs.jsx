import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {setParagraphs} from "../../../../../../store/paragraphSlice";
import { SectionContainer } from "../../../parts/SectionContainer/SectionContainer";
import { PlusIcon } from "../../../../../../img/icons/PlusIcon";
import { Icon } from "../../../../../../ui-kit";
import Paragraph from "./Paragraph/Paragraph";
import styles from "./Paragraphs.module.scss";


const Paragraphs = () => {
  const book = useSelector((state) => state.books.editBook);
  const paragraphs = useSelector((state) => state.paragraph);

  const dispatch = useDispatch();

  console.log(paragraphs);

  useEffect(() => {
    dispatch(setParagraphs(book.paragraphs));
  }, []);

  return (
    <div className={styles.paragraphs}>
      <SectionContainer className={styles.paragraphsRootTitle}>
        <p className={styles.paragraphsTitle}>Оглавление</p>
        <Icon className={styles.paragraphsAddIcon} icon={<PlusIcon />} />
      </SectionContainer>
      {book.paragraphs &&
        book.paragraphs.map((paragraph) => (
          <Paragraph
            key={paragraph.number}
            number={paragraph.number}
            name={paragraph.title}
            error
          />
        ))}
    </div>
  );
};

export default Paragraphs;
