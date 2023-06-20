import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/authSlice/extraReducers";
import { resetCurrentUser } from "../../store/userSlice";
import Tabs from "./parts/Tabs";
import { LogoIcon } from "../../img/icons";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("etf");

  const handelLogOut = () => {
    dispatch(logout(token)).then((res) => {
      if (!res.error) {
        navigate("/", { state: { from: "/books" } });
      }
    });
    dispatch(resetCurrentUser(null));
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarLogo}>
          <LogoIcon />
        </div>
        <Tabs />
      </div>
      <button onClick={handelLogOut} className={styles.navbarButton}>
         Выход
      </button>
    </header>
  );
}
