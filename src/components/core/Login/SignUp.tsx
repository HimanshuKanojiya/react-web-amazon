import React from "react";
import { LoginContainer } from "components/styles/Login/LoginContainer";
import { SignUpForm } from "./SignUpForm";
import { amazonIcons } from "assets/icons";

export const SignUp: React.FC = () => {
  const { AmazonLogoIcon } = amazonIcons;

  return (
    <LoginContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonLogoIcon} alt="amazon-logo" />
      </a>
      <SignUpForm />
    </LoginContainer>
  );
};
