import React from "react";
import { Link } from "react-router-dom";
import { VerticalListItemsContainer } from "components/styles/FooterMenuItems/VerticalListItemsContainer";

export const VerticalListItems: React.FC<DefaultVerticalListItemsProp> = ({
  menuItems,
}) => {
  return (
    <VerticalListItemsContainer>
      {menuItems.map((menuItem) => {
        if (!menuItem.link) {
          return <p key={menuItem.displayTitle}>{menuItem.displayTitle}</p>;
        }
        return (
          <Link key={menuItem.displayTitle} to={menuItem.link}>
            {menuItem.displayTitle}
          </Link>
        );
      })}
    </VerticalListItemsContainer>
  );
};
