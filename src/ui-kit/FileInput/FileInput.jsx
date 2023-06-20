import classNames from "classnames";
import styles from "./FileInput.module.scss";

export const FileInput = ({ ...props }) => {
  const { label, type, disabled, className, register, name, invalid } = props;

  return (
    <div className={classNames(styles.root, { [className]: className })}>
      {label && <label>{label}</label>}
      <label
        htmlFor={name}
        className={classNames(styles.file, {
          [styles.fileDisabled]: disabled,
          [styles.fileInvalid]: invalid
        })}
        data-text={"-"}
      >
        <input id={name} type={type} disabled={disabled} {...register} />
      </label>
    </div>
  );
};
