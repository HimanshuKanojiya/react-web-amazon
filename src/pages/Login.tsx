import React, { useEffect } from "react";
import { Login } from "components/core/Login/Login";
import { Footer } from "components/core/Login/Footer";
import { LoginPageContainer } from "components/styles/Login/LoginPageContainer";
import { useOnPageSEOHandler } from "helper/seo/useOnPageSEOHandler";
import { useProdEnvironment } from "environment/useProdEnvironment";

const LoginPage: React.FC = () => {
  const ENV = useProdEnvironment();

  useOnPageSEOHandler({ pageTitle: "Amazon Sign In" });

  useEffect(() => {
    console.log(ENV.getFireBaseAPIKey());
    console.log(ENV.getFireBaseAppId());
    console.log(ENV.getFireBaseAuthDomain());
    console.log(ENV.getFireBaseMessaginSenderId());
    console.log(ENV.getFireBaseProjectId());
    console.log(ENV.getFireBaseStorageBucket());
  }, [ENV]);

  return (
    <LoginPageContainer>
      <Login />
      <Footer />
    </LoginPageContainer>
  );
};

export default LoginPage;
