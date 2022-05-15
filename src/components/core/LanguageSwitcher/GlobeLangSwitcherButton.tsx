import React, { useState } from "react";
import { amazonIcons } from "assets/icons";
import { LanguagePopUp } from "../Popup/LanguagePopUp";
import { GlobeLangSwitcherContainer } from "components/styles/LanguageSwitcher/GlobeLangSwitcherContainer";

export const GlobeLangSwitcherButton: React.FC = () => {
  const { GlobeIcon, LessOption, ExtendOption } = amazonIcons;
  const [isMoreLangAvail, updateMoreLang] = useState<boolean>(false);

  const showMoreLangOptions = () => {
    updateMoreLang((prevState) => !prevState);
  };

  return (
    <GlobeLangSwitcherContainer onMouseEnter={showMoreLangOptions}>
      <GlobeIcon /> English
      <span className="language-switcher-icon">
        <LessOption />
        <ExtendOption />
      </span>
      {isMoreLangAvail && (
        <LanguagePopUp callbackHandler={showMoreLangOptions} />
      )}
    </GlobeLangSwitcherContainer>
  );
};
