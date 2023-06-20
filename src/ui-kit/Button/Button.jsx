import styles from "./Button.module.scss";
import classNames from "classnames";

export const Button = ({ ...props }) => {
  const { children, disabled, type, bgWhite, onClick, className } = props;
  return (
    <button
      type={type}
      className={classNames(
        styles.btn,
        { [styles.btnWhite]: bgWhite },
        { [className]: className }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
