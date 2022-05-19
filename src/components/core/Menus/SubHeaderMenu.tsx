import React from "react";
import SubHeaderMenuItems from "assets/sub-header-menu.json";
import { Link } from "react-router-dom";
import { amazonIcons } from "assets/icons";
import { SubHeaderMenuContainer } from "components/styles/Menus/SubHeaderMenuContainer";

export const SubHeaderMenu: React.FC = () => {
  const { HamburgerMenu } = amazonIcons;

  return (
    <SubHeaderMenuContainer>
      <button>
        <HamburgerMenu /> All
      </button>
      {SubHeaderMenuItems.map((menuItem) => {
        return (
          <Link key={menuItem.displayText} to={menuItem.link}>
            {menuItem.displayText}
          </Link>
        );
      })}
    </SubHeaderMenuContainer>
  );
};
