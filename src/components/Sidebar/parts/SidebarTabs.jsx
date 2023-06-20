import React from "react";
import { useSelector } from "react-redux";
import SidebarTab from "./SidebarTab";
import styles from "../Sidebar.module.scss";
import { SIDEBAR_ROUTS } from "../../../routes";

const SidebarTabs = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const permission_route = SIDEBAR_ROUTS.filter((route) => {
    return route.permission.indexOf(currentUser?.type) !== -1;
  });

  return (
    <ul className={styles.tabs}>
      {permission_route &&
        permission_route.map((link) => (
          <li key={link.id}>
            <SidebarTab
              link={link.path}
              icon={link.icon}
              name={link.name}
              disabled={link.disabled}
            />
          </li>
        ))}
    </ul>
  );
};

export default SidebarTabs;
