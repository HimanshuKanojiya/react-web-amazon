import React from "react";
import { FooterMenuContainer } from "components/styles/Menus/FooterMenuContainer";
import { HorizontalListItems } from "../FooterMenuItems/HorizontalListItems";
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
    </FooterMenuContainer>
  );
};
