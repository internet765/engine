import { useState } from "react";
import styles from "./Checkbox.module.scss";

export const Checkbox = ({
  value,
  checked,
  register,
  disabled,
  label,
  name,
  id,
}) => {
  
  const [check, setCheck] = useState(checked);

  return (
    <div className={styles.checkbox}>
      <input
        onClick={() => setCheck((prev) => !prev)}
        type="checkbox"
        id={id}
        value={value}
        name={name}
        className={styles.checkboxInput}
        checked={check}
        disabled={disabled}
        {...register}
      />
      {label && <label htmlFor={value}>{label}</label>}
    </div>
  );
};
