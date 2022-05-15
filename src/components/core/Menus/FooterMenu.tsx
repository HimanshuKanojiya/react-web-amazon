import React from "react";
import { FooterMenuContainer } from "components/styles/Menus/FooterMenuContainer";
import { HorizontalListItems } from "../FooterMenuItems/HorizontalListItems";
import { VerticalListItems } from "../FooterMenuItems/VerticalListItems";
import { GlobeLangSwitcherButton } from "../LanguageSwitcher/GlobeLangSwitcherButton";
import { VerticalSingleListItems } from "../FooterMenuItems/VertialSingleListItems";
import { AmazonLogo } from "../AmazonLogo";
import FooterMenuItems from "assets/footer-menu-items.json";

export const FooterMenu: React.FC = () => {
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
          <GlobeLangSwitcherButton />
        </div>
        <div className="countries-list">
          <VerticalListItems {...FooterMenuItems.countries} />
        </div>
      </div>
      <div className="footer-secondary-menu">
        <div className="secondary-menu">
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.abeBooks}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.amazonWebServices}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.audible}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.dpReview}
          />
          <VerticalSingleListItems {...FooterMenuItems.footerSecondary.imdb} />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.shopbop}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.amazonBusiness}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.primeNow}
          />
          <VerticalSingleListItems
            {...FooterMenuItems.footerSecondary.amazonPrimeMusic}
          />
        </div>
        <div className="tertiary">
          <VerticalListItems {...FooterMenuItems.tertiary} />
        </div>
      </div>
    </FooterMenuContainer>
  );
};
