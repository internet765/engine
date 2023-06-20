import classNames from "classnames";
import styles from "./Textarea.module.scss";
export const Textarea = ({ className, label, register }) => {
  return (
    <div className={styles.root}>
      {label && <label>{label}</label>}
      <textarea className={classNames(styles.textarea, { [className]: className })} placeholder={"—"} {...register} />
    </div>
  );
};
