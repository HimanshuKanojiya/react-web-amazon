import React from "react";
import { Link } from "react-router-dom";
import { DefaultGreyButtonStyle } from "components/styles/Button/DefaultGreyButtonStyle";

export const DefaultGreyButton: React.FC<DefaultButtonProps> = ({
  ctaText,
  ctaLink,
}) => {
  return (
    <DefaultGreyButtonStyle>
      <Link to={ctaLink}>{ctaText}</Link>
    </DefaultGreyButtonStyle>
  );
};
