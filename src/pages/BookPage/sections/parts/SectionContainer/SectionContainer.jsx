import classNames from "classnames";
import styles from "./SectionContainer.module.scss";

export const SectionContainer = ({ children, className }) => {
  return (
    <div className={classNames(styles.container, { [className]: className })}>
      {children}
    </div>
  );
};
