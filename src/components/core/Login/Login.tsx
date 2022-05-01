import React from "react";
import { Form } from "./Form";
import { LoginContainer } from "components/styles/Login/LoginContainer";
import { DefaultGreyButton } from "components/core/Button/DefaultGreyButton";
import { Error } from "../UI States/Error";
import { amazonIcons } from "assets/icons";
import { useAppSelector } from "store/useStoreHooks";

export const Login: React.FC = () => {
  const { AmazonLogoIcon } = amazonIcons;
  const { error } = useAppSelector((state) => state.authenticate);

  return (
    <LoginContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonLogoIcon} alt="amazon-logo" />
      </a>

      {error && (
        <Error title="There was a problem" issueText={error.errorMessage} />
      )}

      <Form />
      <div className="sign-up-option">
        <div className="new-to-amazon-headline">
          <span />
          <p>New to Amazon?</p>
          <span />
        </div>
        <DefaultGreyButton
          ctaLink="/sign-up"
          ctaText="Create your Amazon Account"
        />
      </div>
    </LoginContainer>
  );
};
