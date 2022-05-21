import React from "react";
import { Link } from "react-router-dom";
import { ImageProductCardContainer } from "components/styles/Cards/ImageProductCardContainer";

export const ImageProductCard: React.FC<DefaultImageProductCardProps> = ({
  productName,
  productResouceLink,
  ctaLink,
}) => {
  return (
    <ImageProductCardContainer>
      <Link to={ctaLink}>
        <img src={productResouceLink} alt={productName} />
      </Link>
    </ImageProductCardContainer>
  );
};
