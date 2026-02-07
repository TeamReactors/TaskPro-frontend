import React from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

const AuthPage = () => {
  const {id} = useParams();

  return (
    <div>
      {id === "login" ? <LoginForm></LoginForm> : <RegisterForm></RegisterForm>}
    </div>
  );
};

export default AuthPage;
