import React from "react";
import { Login } from "components/core/Login/Login";
import { LoginPageContainer } from "components/styles/Login/LoginPageContainer";

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <Login />
    </LoginPageContainer>
  );
};

export default LoginPage;
