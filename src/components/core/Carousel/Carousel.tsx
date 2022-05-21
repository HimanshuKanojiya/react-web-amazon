import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CarouselContainer } from "components/styles/Carousel/CarouselContainer";
import { VideoProductCard } from "../Cards/VideoProductCard";
import { ImageProductCard } from "../Cards/ImageProductCard";

export const Carousel: React.FC<DefaultCarouselBarProps> = ({
  title,
  ctaLink,
  ctaText,
  productItems,
}) => {
  const [isScrollbarVisible, updateScrollbarVisibility] =
    useState<boolean>(false);

  const updateCarouselBarVisibility = () => {
    updateScrollbarVisibility((prevState) => !prevState);
  };

  return (
    <CarouselContainer>
      <div className="carousel-bar-info">
        <h2>{title}</h2>
        <Link to={ctaLink}>{ctaText}</Link>
      </div>
      <div
        className={`carousel-bar-slider ${
          isScrollbarVisible ? "carousel-with-hover" : ""
        }`}
        onMouseEnter={updateCarouselBarVisibility}
        onMouseLeave={updateCarouselBarVisibility}
      >
        {productItems.map((productItem) => {
          return productItem.contentType === "image" ? (
            <ImageProductCard
              productName={productItem.productName}
              productResouceLink={productItem.productResouceLink}
              ctaLink={productItem.ctaLink}
            />
          ) : productItem.contentType === "video" ? (
            <VideoProductCard
              productName={productItem.productName}
              productResouceLink={productItem.productResouceLink}
            />
          ) : null;
        })}
      </div>
    </CarouselContainer>
  );
};
