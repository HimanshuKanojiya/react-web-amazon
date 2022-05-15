import React from "react";
import { FooterMenuContainer } from "components/styles/Menus/FooterMenuContainer";
import { HorizontalListItems } from "../FooterMenuItems/HorizontalListItems";
import { VerticalListItems } from "../FooterMenuItems/VerticalListItems";
import { AmazonLogo } from "../AmazonLogo";
import { amazonIcons } from "assets/icons";
import FooterMenuItems from "assets/footer-menu-items.json";

export const FooterMenu: React.FC = () => {
  const { GlobeIcon, LessOption, ExtendOption } = amazonIcons;

  return (
    <FooterMenuContainer>
      <div className="footer-menu">
        <HorizontalListItems {...FooterMenuItems.getToKnowUs} />
        <HorizontalListItems {...FooterMenuItems.connectWithUs} />
        <HorizontalListItems {...FooterMenuItems.makeMoneyWithUs} />
        <HorizontalListItems {...FooterMenuItems.letUsHelpYou} />
      </div>
      <div className="footer-country-menu">
        <div className="first-section">
          <AmazonLogo />
          <button className="change-language-switcher">
            <GlobeIcon /> English
            <span className="language-switcher-icon">
              <LessOption />
              <ExtendOption />
            </span>
          </button>
        </div>
        <div className="countries-list">
          <VerticalListItems {...FooterMenuItems.countries} />
        </div>
      </div>
    </FooterMenuContainer>
  );
};
