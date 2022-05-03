import React from "react";
import { amazonIcons } from "assets/icons";
import { HeaderMenuContainer } from "components/styles/Menus/HeaderMenuContainer";
import { SearchBarContainer } from "components/styles/SearchBar/SearchBarContainer";

export const HeaderMenu: React.FC = () => {
  const { AmazonWhiteLogoIcon, LocationIcon } = amazonIcons;

  return (
    <HeaderMenuContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonWhiteLogoIcon} alt="amazon-logo" />
      </a>
      <div className="amazon-choose-address">
        <LocationIcon />
        <div
          className="amazon-choose-address-pick"
          onClick={() => console.log("Choose address!")}
        >
          <p>Hello</p>
          <strong>Select your address</strong>
        </div>
      </div>
      <SearchBarContainer />
    </HeaderMenuContainer>
  );
};
