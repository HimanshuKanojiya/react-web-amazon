import React from "react";
import { amazonIcons } from "assets/icons";
import { HeaderMenuContainer } from "components/styles/Menus/HeaderMenuContainer";
import { DualTextItem } from "../HeaderMenuItems/DualTextItem";
import { SearchBar } from "../SearchBar/SearchBar";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

export const HeaderMenu: React.FC = () => {
  const { AmazonWhiteLogoIcon, LocationIcon, LessOption } = amazonIcons;

  return (
    <HeaderMenuContainer>
      <a className="amazon-logo" href="/">
        <img src={AmazonWhiteLogoIcon} alt="amazon-logo" />
      </a>

      <DualTextItem
        withIcon={true}
        iconPosition="left"
        icon={LocationIcon}
        actionCTA={() => console.log("Choose address!")}
        normalText="Hello"
        highlightText="Select your address"
      />

      <SearchBar />
      <LanguageSwitcher />

      <DualTextItem
        withIcon={true}
        iconPosition="right"
        icon={LessOption}
        actionCTA={() => console.log("Choose address!")}
        normalText="Hello, Sign in"
        highlightText="Account & Lists"
      />

      <DualTextItem
        withIcon={false}
        actionCTA={() => console.log("Choose address!")}
        normalText="Returns"
        highlightText="& Orders"
      />
    </HeaderMenuContainer>
  );
};
