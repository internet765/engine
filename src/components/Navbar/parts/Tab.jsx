import { NavLink } from "react-router-dom";
import styles from "./Tabs.module.scss";

const Tab = ({ key, name, link, disabled }) => {
  const setActive = ({ isActive }) => {
    if (isActive) {
      return `${styles.tab} ${styles.tabActive}`;
    } else if (disabled) {
      return `${styles.tab} ${styles.tabDisabled}`;
    } else {
      return `${styles.tab}`;
    }
  };

  return (
    <NavLink
      onClick={(event) => disabled && event.preventDefault()}
      className={setActive}
      to={link}
      key={key}
    >
      {name}
    </NavLink>
  );
};

export default Tab;
