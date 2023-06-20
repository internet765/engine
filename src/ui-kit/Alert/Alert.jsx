import classNames from "classnames";
import styles from "./Alert.module.scss";
import { AlertIcon } from "../../img/icons";

export const Alert = ({ text, smallText, className }) => {
  return (
    <div className={classNames(styles.alert, { [className]: className })}>
      <AlertIcon />
      <p
        className={classNames(styles.alertText, {
          [styles.alertTextSmall]: smallText
        })}
      >
        {text}
      </p>
    </div>
  );
};
