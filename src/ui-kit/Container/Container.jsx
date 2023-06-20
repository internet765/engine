import classNames from "classnames";
import styles from "./Container.module.scss";

export const Container = ({
  children,
  p30,
  plr30,
  ptb30,
  className,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={classNames(styles.container, className, {
        [styles.containerPadding]: p30,
        [styles.containerPaddingLR]: plr30,
        [styles.containerPaddingTB]: ptb30,
      })}
    >
      {children}
    </div>
  );
};
