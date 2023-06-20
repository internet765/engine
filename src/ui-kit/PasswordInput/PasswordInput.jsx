import React, { useState } from "react";
import { EyeClosedIcon, EyeOpenIcon } from "../../img/icons";
import { Input } from "../index";
import styles from "./PasswordInput.module.scss";

export const PasswordInput = ({ register, invalid, label, minLength, maxLength }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.root}>
      <Input
        register={{ ...register }}
        label={label}
        type={!showPassword ? "password" : "text"}
        name={"password"}
        invalid={invalid}
        minLength={minLength}
        maxLength={maxLength}
        password
      />
      <div className={styles.icon} onClick={()=> setShowPassword(!showPassword)}>
        {!showPassword ? <EyeClosedIcon /> : <EyeOpenIcon />}
      </div>
    </div>
  );
};
