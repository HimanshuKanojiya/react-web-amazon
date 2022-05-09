import React, { useState } from "react";
import { amazonIcons } from "assets/icons";
import { LanguageSwitcherContainer } from "components/styles/LanguageSwitcher/LanguageSwitcherContainer";

export const LanguageSwitcher: React.FC = () => {
  const { IndiaFlag, LessOption } = amazonIcons;
  const [isMoreLangAvail, updateMoreLang] = useState<boolean>(false);

  const showMoreLangOptions = () => {
    updateMoreLang((prevState) => !prevState);
  };

  return (
    <LanguageSwitcherContainer>
      <div className="lang-flag" onMouseEnter={showMoreLangOptions}>
        <img src={IndiaFlag} alt="Great India Flag" />
        <LessOption />
      </div>
      <div
        className={`show-language ${
          isMoreLangAvail ? "display-show-more-lang" : ""
        }`}
        onMouseLeave={showMoreLangOptions}
      >
        <div className="upper-triangle"></div>

        <div className="pick-lang-option pick-lang-option-default">
          <label htmlFor="English">English - EN</label>
          <input
            type="radio"
            name="lang-switcher"
            id="English"
            defaultChecked
          />
        </div>
        <div className="pick-lang-option">
          <label htmlFor="Hindi">हिन्दी - HI</label>
          <input type="radio" name="lang-switcher" id="Hindi" />
        </div>
        <div className="pick-lang-option">
          <label htmlFor="Tamil">தமிழ் - TA</label>
          <input type="radio" name="lang-switcher" id="Tamil" />
        </div>
        <div className="pick-lang-option">
          <label htmlFor="Marathi">मराठी - MR</label>
          <input type="radio" name="lang-switcher" id="Marathi" />
        </div>
      </div>
    </LanguageSwitcherContainer>
  );
};
