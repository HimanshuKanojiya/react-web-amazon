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
          return <p>{menuItem.displayTitle}</p>;
        }
        return <Link to={menuItem.link}>{menuItem.displayTitle}</Link>;
      })}
    </VerticalListItemsContainer>
  );
};
