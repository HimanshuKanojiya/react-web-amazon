import React, { useEffect, useState } from "react";
import { amazonIcons } from "assets/icons";
import { LanguageSwitcherContainer } from "components/styles/LanguageSwitcher/LanguageSwitcherContainer";
import { LanguagePopUp } from "../Popup/LanguagePopUp";

import { useElementAttributesChanger } from "helper/elementAttributesChanger/useElementAttributesChanger";

export const LanguageSwitcher: React.FC = () => {
  const { IndiaFlag, LessOption } = amazonIcons;
  const [isMoreLangAvail, updateMoreLang] = useState<boolean>(false);
  const { setStyleAttribute, removeStyleAttribute } =
    useElementAttributesChanger();

  const showMoreLangOptions = () => {
    updateMoreLang((prevState) => !prevState);
  };

  useEffect(() => {
    if (isMoreLangAvail) {
      setStyleAttribute("0.5", ".after-header-body");
    } else {
      removeStyleAttribute(".after-header-body");
    }

    return () => {
      removeStyleAttribute(".after-header-body");
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMoreLangAvail]);

  return (
    <LanguageSwitcherContainer>
      <div className="lang-flag" onMouseEnter={showMoreLangOptions}>
        <img src={IndiaFlag} alt="Great India Flag" />
        <LessOption />
      </div>

      {isMoreLangAvail && (
        <LanguagePopUp callbackHandler={showMoreLangOptions} />
      )}
    </LanguageSwitcherContainer>
  );
};
