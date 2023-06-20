import styles from "./Preloader.module.scss";

export const Preloader = () => {
  return (
    <div className={styles.root}>
      <div className={styles.preloader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
