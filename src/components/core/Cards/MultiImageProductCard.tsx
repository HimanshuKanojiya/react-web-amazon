import React from "react";
import { Link } from "react-router-dom";
import { MultiImageProductCardContainer } from "components/styles/Cards/MultiImageProductCardContainer";

export const MultiImageProductCard: React.FC<
  DefaultMultiImageProductCardProps
> = ({ title, ctaText, ctaLink, subProductImage }) => {
  return (
    <MultiImageProductCardContainer>
      <h2 className="product-title">{title}</h2>
      <div className="sub-product-list-items">
        {subProductImage.map((productImage) => {
          return (
            <Link
              key={productImage.title}
              className="sub-product-list-item"
              to={productImage.ctaLink}
            >
              <img
                className="product-item-image"
                src={productImage.image}
                alt={productImage.title}
              />
              <p className="product-item-title">{productImage.title}</p>
            </Link>
          );
        })}
      </div>
      <Link className="product-link" to={ctaLink}>
        {ctaText}
      </Link>
    </MultiImageProductCardContainer>
  );
};
