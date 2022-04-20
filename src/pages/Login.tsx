import React from "react";
import { Login } from "components/core/Login/Login";
import { Footer } from "components/core/Login/Footer";
import { LoginPageContainer } from "components/styles/Login/LoginPageContainer";
import { useOnPageSEOHandler } from "helper/seo/useOnPageSEOHandler";

const LoginPage: React.FC = () => {
  useOnPageSEOHandler({ pageTitle: "Amazon Sign In" });

  return (
    <LoginPageContainer>
      <Login />
      <Footer />
    </LoginPageContainer>
  );
};

export default LoginPage;
