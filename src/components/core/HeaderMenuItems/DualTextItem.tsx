import React, { useState, useEffect } from "react";
import { DualTextItemContainer } from "components/styles/HeaderMenuItems/DualTextItemContainer";
import { useElementAttributesChanger } from "helper/elementAttributesChanger/useElementAttributesChanger";

export const DualTextItem: React.FC<DefaultDualTextItemProps> = ({
  withIcon,
  iconPosition,
  icon: Icon,
  actionCTA,
  normalText,
  highlightText,
  PopUpComponent,
}) => {
  const [isPopUpModelOpen, setPopUpModelOpen] = useState<boolean>(false);

  const { setStyleAttribute, removeStyleAttribute } =
    useElementAttributesChanger();

  const showModelPopUp = () => {
    setPopUpModelOpen((prevState) => !prevState);
  };

  useEffect(() => {
    if (isPopUpModelOpen) {
      setStyleAttribute("0.5", ".after-header-body");
    } else {
      removeStyleAttribute(".after-header-body");
    }

    return () => {
      removeStyleAttribute(".after-header-body");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPopUpModelOpen]);

  return (
    <DualTextItemContainer>
      <div
        className="text-items"
        onClick={actionCTA}
        onMouseEnter={actionCTA ? undefined : showModelPopUp}
      >
        {withIcon && iconPosition === "left" && <Icon />}
        <div className="ItemTextContainer">
          <p>{normalText}</p>
          <strong>{highlightText}</strong>
        </div>
        {withIcon && iconPosition === "right" && <Icon />}
      </div>

      {isPopUpModelOpen &&
        PopUpComponent &&
        React.cloneElement(PopUpComponent, {
          callbackHandler: showModelPopUp,
        })}
    </DualTextItemContainer>
  );
};
