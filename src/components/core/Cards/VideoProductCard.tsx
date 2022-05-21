import React from "react";
import { VideoProductCardContainer } from "components/styles/Cards/VideoProductCardContainer";

export const VideoProductCard: React.FC<DefaultVideoProductCardProps> = ({
  productName,
  productResouceLink,
}) => {
  return (
    <VideoProductCardContainer>
      <video controls>
        <source src={productResouceLink} />
        {`${productName} video not found`}
      </video>
    </VideoProductCardContainer>
  );
};
