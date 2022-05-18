import React from "react";
import { AmazonLogoContainer } from "components/styles/AmazonLogoContainer";
import { amazonIcons } from "assets/icons";

export const AmazonLogo: React.FC = () => {
  const { AmazonNavSprite } = amazonIcons;

  return (
    <AmazonLogoContainer AmazonNavSprite={AmazonNavSprite} href="/">
      <div className="amazon-logo"></div>
    </AmazonLogoContainer>
  );
};
