import React from "react";
import { amazonIcons } from "assets/icons";
import { HeaderMenuContainer } from "components/styles/Menus/HeaderMenuContainer";

export const HeaderMenu: React.FC = () => {
  const { AmazonLogoIcon, LocationIcon } = amazonIcons;

  return (
    <HeaderMenuContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonLogoIcon} alt="amazon-logo" />
      </a>
      <div>
        <LocationIcon />
        <div>
          <p>Hello</p>
          <strong></strong>
        </div>
      </div>
    </HeaderMenuContainer>
  );
};
