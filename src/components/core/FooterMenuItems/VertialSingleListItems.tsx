import React from "react";
import { VertialSingleListItemsContainer } from "components/styles/FooterMenuItems/VertialSingleListItemsContainer";

export const VerticalSingleListItems: React.FC<
  DefaultVerticalSingleListItemsProp
> = ({ menuTitle, menuItem }) => {
  return (
    <VertialSingleListItemsContainer href={menuItem.link}>
      <strong>{menuTitle}</strong>
      <p>{menuItem.displayTitle}</p>
    </VertialSingleListItemsContainer>
  );
};
