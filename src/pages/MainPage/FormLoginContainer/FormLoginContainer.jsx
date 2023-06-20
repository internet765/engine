import React from "react";
import { useSelector } from "react-redux";
import AuthForm from "./parts/AuthForm/AuthForm";
import SendCodeForm from "./parts/SendCodeForm/SendCodeForm";
import ResetForm from "./parts/ResetForm/ResetForm";

const FormLoginContainer = () => {

  const { auth, send_code, reset_password } = useSelector((state) => state.support.forms);

  return (
    <>
      {auth && <AuthForm />}
      {send_code && <SendCodeForm />}
      {reset_password && <ResetForm />}
    </>
  );
};

export default FormLoginContainer;
