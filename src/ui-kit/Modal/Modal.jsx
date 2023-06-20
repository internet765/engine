import { useDispatch } from "react-redux";
import { toggleModal } from "../../store/supportSlice";
import classNames from "classnames";
import styles from "./Modal.module.scss";

export const Modal = ({ ...props }) => {
  const dispatch = useDispatch();

  const { children, component, subtitle, title, className, active, id } = props;
  return (
    <div
      className={classNames(styles.modal, {
        [styles.modalActive]: active
      })}
      onMouseDown={() => dispatch(toggleModal(id))}
    >
      <div
        className={classNames(styles.modalRoot, { [className]: className })}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {title && <h2 className={styles.modalTitle}>{title}</h2>}
        {subtitle && <p className={styles.modalSubtitle}>{subtitle}</p>}
        {component ? component : children}
      </div>
    </div>
  );
};
