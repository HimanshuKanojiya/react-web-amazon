import React from "react";
import { Login } from "components/core/Login/Login";
import { Footer } from "components/core/Login/Footer";
import { LoginPageContainer } from "components/styles/Login/LoginPageContainer";

const LoginPage: React.FC = () => {
  return (
    <LoginPageContainer>
      <Login />
      <Footer />
    </LoginPageContainer>
  );
};

export default LoginPage;
