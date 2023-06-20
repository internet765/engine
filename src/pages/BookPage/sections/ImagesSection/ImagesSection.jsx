import ImageItem from "./parts/ImageItem/ImageItem";
import { SectionContainer } from "../parts/SectionContainer/SectionContainer";
import { Container } from "../../../../ui-kit";
import styles from "./ImagesSection.module.scss";

export const ImagesSection = () => {
  return (
    <div className={styles.section}>
      <SectionContainer>
        <p className={styles.sectionTitle}>Изображения</p>
      </SectionContainer>
      {/* тут будет проверка на наличие изображений  */}
      <Container className={styles.sectionGrid}>
        <ImageItem link={"Параграф # 1"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        <ImageItem link={"Параграф # 2"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        <ImageItem link={"Параграф # 3"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        <ImageItem link={"Параграф # 4"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        <ImageItem link={"Параграф # 5"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
        <ImageItem link={"Параграф # 6"} src={"https://images.unsplash.com/photo-1460194436988-671f763436b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} />
      </Container>
    </div>
  );
};
