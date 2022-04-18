import React from "react";
import { SignUpPageContainer } from "components/styles/Login/SignUpPageContainer";
import { SignUp } from "components/core/Login/SignUp";
import { Footer } from "components/core/Login/Footer";

const SignUpPage: React.FC = () => {
  return (
    <SignUpPageContainer>
      <SignUp />
      <Footer />
    </SignUpPageContainer>
  );
};

export default SignUpPage;
