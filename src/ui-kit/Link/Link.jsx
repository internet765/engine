import classNames from "classnames";
import styles from "./Link.module.scss";

export const Link = ({ text, href, disabled, className, onClick }) => {
  return (
    <a
      className={classNames(styles.link, { [className]: classNames, [styles.linkDisabled]: disabled })}
      href={href}
      onClick={onClick}
    >
      {text}
    </a>
  );
};
