import React from "react";
import { DualTextItemContainer } from "components/styles/HeaderMenuItems/DualTextItemContainer";

export const DualTextItem: React.FC<DefaultDualTextItemProps> = ({
  withIcon,
  iconPosition,
  icon: Icon,
  actionCTA,
  normalText,
  highlightText,
}) => {
  return (
    <DualTextItemContainer onClick={actionCTA}>
      {withIcon && iconPosition === "left" && <Icon />}
      <div className="ItemTextContainer">
        <p>{normalText}</p>
        <strong>{highlightText}</strong>
      </div>
      {withIcon && iconPosition === "right" && <Icon />}
    </DualTextItemContainer>
  );
};
