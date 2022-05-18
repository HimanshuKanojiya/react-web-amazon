import React from "react";
import { Link } from "react-router-dom";
import { OneImageProductCardContainer } from "components/styles/Cards/OneImageProductCardContainer";

export const OneImageProductCard: React.FC<DefaultOneImageProductCardProps> = ({
  title,
  image,
  ctaText,
  ctaLink,
}) => {
  return (
    <OneImageProductCardContainer>
      <h2 className="product-title">{title}</h2>
      <img className="product-image" src={image} alt={title} />
      <Link className="product-link" to={ctaLink}>
        {ctaText}
      </Link>
    </OneImageProductCardContainer>
  );
};
