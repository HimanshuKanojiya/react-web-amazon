import React from "react";
import { amazonIcons } from "assets/icons";
import { HeaderMenuContainer } from "components/styles/Menus/HeaderMenuContainer";
import { SearchBar } from "../SearchBar/SearchBar";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const HeaderMenu: React.FC = () => {
  const { AmazonWhiteLogoIcon, LocationIcon, LessOption } = amazonIcons;

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
      <SearchBar />
      <LanguageSwitcher />
      <div className="signed-in-and-account">
        <div
          className="signed-in-and-account-text"
          onClick={() => console.log("Choose address!")}
        >
          <p>Hello, Sign in</p>
          <strong>Account & Lists</strong>
        </div>
        <LessOption />
      </div>
      <div className="return-and-order">
        <p>Returns</p>
        <strong>& Orders</strong>
      </div>
    </HeaderMenuContainer>
  );
};
