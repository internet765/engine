import classNames from "classnames";
import styles from "./Icon.module.scss";

export const Icon = ({ icon, disabled, className, active, onClick }) => {
  return (
    <div
      onClick={!disabled ? onClick : undefined}
      className={classNames(styles.icon, className, {
        [styles.iconDisabled]: disabled,
        [styles.iconActive]: active,
      })}
    >
      {icon}
    </div>
  );
};
