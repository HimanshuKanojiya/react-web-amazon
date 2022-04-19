import React from "react";
import { SignUpPageContainer } from "components/styles/Login/SignUpPageContainer";
import { SignUp } from "components/core/Login/SignUp";
import { Footer } from "components/core/Login/Footer";
import { useOnPageSEOHandler } from "helper/seo/useOnPageSEOHandler";

const SignUpPage: React.FC = () => {
  useOnPageSEOHandler({ pageTitle: "Amazon Registration" });

  return (
    <SignUpPageContainer>
      <SignUp />
      <Footer />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
