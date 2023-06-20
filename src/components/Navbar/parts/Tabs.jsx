import { useSelector } from "react-redux";
import Tab from "./Tab";
import styles from "./Tabs.module.scss";
import { NAVBAR_ROUTS } from "../../../routes";

const Tabs = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const permission_route = NAVBAR_ROUTS.filter((route) => {
    return route.permission.indexOf(currentUser?.type) !== -1;
  });
  return (
    <ul className={styles.tabs}>
      {permission_route &&
        permission_route.map((link) => (
          <li key={link.id}>
            <Tab link={link.path} name={link.name} disabled={link.disabled} />
          </li>
        ))}
    </ul>
  );
};

export default Tabs;
