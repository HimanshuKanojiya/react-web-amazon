import React from "react";
import { Link } from "react-router-dom";
import { HorizontalListItemsContainer } from "components/styles/FooterMenuItems/HorizontalListItemsContainer";

export const HorizontalListItems: React.FC<DefaultHorizontalItemsProp> = ({
  menuTitle,
  menuItems,
}) => {
  return (
    <HorizontalListItemsContainer>
      <strong>{menuTitle}</strong>
      {menuItems.map((menuItem) => {
        return <Link to={menuItem.link}>{menuItem.displayTitle}</Link>;
      })}
    </HorizontalListItemsContainer>
  );
};
