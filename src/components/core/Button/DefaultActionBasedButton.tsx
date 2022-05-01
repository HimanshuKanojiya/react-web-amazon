import React from "react";
import { ActionBasedButtonStyle } from "components/styles/Button/ActionBasedButtonStyle";

export const DefaultActionBasedButton: React.FC<
  DefaultActionBasedButtonProps
> = ({ ctaText, ctaAction, type, isDisabled }) => {
  return (
    <ActionBasedButtonStyle
      disabled={isDisabled}
      type={type}
      onClick={ctaAction}
    >
      {ctaText}
    </ActionBasedButtonStyle>
  );
};
