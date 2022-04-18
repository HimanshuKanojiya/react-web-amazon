import React from "react";
import { LoginContainer } from "components/styles/Login/LoginContainer";
import { DefaultGreyButton } from "components/core/Button/DefaultGreyButton";
import { amazonIcons } from "assets/icons";

export const SignUp: React.FC = () => {
  const { AmazonLogoIcon } = amazonIcons;

  return (
    <LoginContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonLogoIcon} alt="amazon-logo" />
      </a>

      {/* <Form /> */}
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
