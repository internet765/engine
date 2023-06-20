import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUsers } from "../../store/userSlice";
import HeaderUsers from "./parts/HeaderUsers/HeaderUsers";
import Dialog from "./parts/Dialog/Dialog";
import EditUserForm from "./parts/EditUserForm/EditUserForm";
import User from "./parts/User/User";
import { Modal, Preloader } from "../../ui-kit";
import styles from "./UsersPage.module.scss";

export const UsersPage = () => {
  const dispatch = useDispatch();
  const { users, reqStatus } = useSelector((state) => state.user);
  const { edit_user, delete_user } = useSelector(
    (state) => state.support.modals
  );

  useEffect(() => {
    dispatch(setUsers());
  }, [dispatch]);

  return (
    <section className={styles.page}>
      <HeaderUsers />
      <div className={styles.pageUsers}>
        {users &&
          users.map((user) => <User user={user} key={user.id} />)}
      </div>
      {edit_user && (
        <Modal
          title={"Пользователь"}
          active={edit_user}
          id={"edit_user"}
          component={<EditUserForm/>}
        />
      )}
      {delete_user && (
        <Modal
          title={"Удалить пользователя?"}
          active={delete_user}
          id={"delete_user"}
          component={<Dialog />}
        />
      )}
    </section>
  );
};
