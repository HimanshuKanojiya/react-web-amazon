import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CarouselContainer } from "components/styles/Carousel/CarouselContainer";
import { VideoProductCard } from "../Cards/VideoProductCard";
import { ImageProductCard } from "../Cards/ImageProductCard";
import { amazonIcons } from "assets/icons";

export const Carousel: React.FC<DefaultCarouselBarProps> = ({
  title,
  ctaLink,
  ctaText,
  productItems,
}) => {
  const [isScrollbarVisible, updateScrollbarVisibility] =
    useState<boolean>(false);

  const carouseSliderRef = useRef<HTMLDivElement | null>(null);

  const [currentX, updateCurrentX] = useState<number>(0);

  const [{ isLeftEnable, isRightEnable }, updateControlButton] = useState<{
    isLeftEnable: boolean;
    isRightEnable: boolean;
  }>({
    isLeftEnable: false,
    isRightEnable: true,
  });

  const { LeftIcon, RightIcon } = amazonIcons;

  const updateCarouselBarVisibility = (isVisible: boolean) => {
    updateScrollbarVisibility(isVisible);
  };

  const isLastElementVisible = (): boolean => {
    if (!carouseSliderRef.current?.lastElementChild) {
      return false;
    }

    return (
      carouseSliderRef.current.lastElementChild?.getBoundingClientRect().left >
      carouseSliderRef.current.clientWidth
    );
  };

  const slideCarouselBar = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.bubbles = false;

    if (e.currentTarget.className.includes("next")) {
      if (!isLastElementVisible()) {
        updateControlButton({
          isLeftEnable: true,
          isRightEnable: false,
        });

        return;
      }

      updateCurrentX((prevState) => prevState + 400);
      updateControlButton({
        isLeftEnable: true,
        isRightEnable: true,
      });
    } else if (e.currentTarget.className.includes("back")) {
      if (currentX === 0) {
        updateControlButton({
          isRightEnable: true,
          isLeftEnable: false,
        });

        return;
      }
      updateCurrentX((prevState) => prevState - 400);
      updateControlButton({
        isLeftEnable: true,
        isRightEnable: true,
      });
    }
  };

  useEffect(() => {
    if (!carouseSliderRef?.current?.scrollTo) return;

    carouseSliderRef.current.scrollTo(currentX, 0);
  }, [currentX]);

  return (
    <CarouselContainer
      onMouseLeave={(e) => {
        e.bubbles = true;
        updateCarouselBarVisibility(false);
      }}
    >
      <div className="carousel-bar-info">
        <h2>{title}</h2>
        <Link to={ctaLink}>{ctaText}</Link>
      </div>
      <button
        className={`carousel-controller-buttons carousel-back-button ${
          isScrollbarVisible ? "carousel-controller-buttons-visible" : ""
        }`}
        disabled={!isLeftEnable}
        onClick={slideCarouselBar}
      >
        <LeftIcon />
      </button>
      <div
        className={`carousel-bar-slider ${
          isScrollbarVisible ? "carousel-with-hover" : ""
        }`}
        onMouseEnter={(e) => {
          e.stopPropagation();
          updateCarouselBarVisibility(true);
        }}
        ref={carouseSliderRef}
      >
        {productItems.map((productItem) => {
          return productItem.contentType === "image" ? (
            <ImageProductCard
              key={productItem.productName}
              productName={productItem.productName}
              productResouceLink={productItem.productResouceLink}
              ctaLink={productItem.ctaLink}
            />
          ) : productItem.contentType === "video" ? (
            <VideoProductCard
              key={productItem.productName}
              productName={productItem.productName}
              productResouceLink={productItem.productResouceLink}
            />
          ) : null;
        })}
      </div>
      <button
        className={`carousel-controller-buttons carousel-next-button ${
          isScrollbarVisible ? "carousel-controller-buttons-visible" : ""
        }`}
        onClick={slideCarouselBar}
        disabled={!isRightEnable}
      >
        <RightIcon />
      </button>
    </CarouselContainer>
  );
};
