import React from "react";
import { ActionBasedButtonStyle } from "components/styles/Button/ActionBasedButtonStyle";

export const DefaultActionBasedButton: React.FC<
  DefaultActionBasedButtonProps
> = ({ ctaText, ctaAction }) => {
  return (
    <ActionBasedButtonStyle onClick={ctaAction}>
      {ctaText}
    </ActionBasedButtonStyle>
  );
};
