import React from "react";
import { LoginContainer } from "components/styles/Login/LoginContainer";
import { SignUpForm } from "./SignUpForm";
import { Error } from "../UI States/Error";
import { amazonIcons } from "assets/icons";
import { useAppSelector } from "store/useStoreHooks";

export const SignUp: React.FC = () => {
  const { AmazonLogoIcon } = amazonIcons;
  const { error } = useAppSelector((state) => state.signUp);

  return (
    <LoginContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonLogoIcon} alt="amazon-logo" />
      </a>

      {error && (
        <Error title="There was a problem" issueText={error.errorMessage} />
      )}

      <SignUpForm />
    </LoginContainer>
  );
};
