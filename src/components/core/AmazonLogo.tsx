import React from "react";
import { AmazonLogoContainer } from "components/styles/AmazonLogoContainer";
import { amazonIcons } from "assets/icons";

export const AmazonLogo: React.FC = () => {
  const { AmazonWhiteLogoIcon } = amazonIcons;

  return (
    <AmazonLogoContainer href="/">
      <img src={AmazonWhiteLogoIcon} alt="amazon-logo" />
    </AmazonLogoContainer>
  );
};
