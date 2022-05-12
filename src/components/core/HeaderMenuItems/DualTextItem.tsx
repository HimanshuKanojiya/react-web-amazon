import React from "react";
import { DualTextItemContainer } from "components/styles/HeaderMenuItems/DualTextItemContainer";

export const DualTextItem: React.FC<DefaultDualTextItemProps> = () => {
  return (
    <DualTextItemContainer>
      <button
        className="amazon-choose-address-pick"
        onClick={() => console.log("Choose address!")}
      >
        <p>Hello</p>
        <strong>Select your address</strong>
      </button>
    </DualTextItemContainer>
  );
};
