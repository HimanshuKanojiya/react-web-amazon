import React from "react";
import { Link } from "react-router-dom";
import { amazonIcons } from "assets/icons";
import { LanguagePopUpContainer } from "components/styles/Popups/LanguagePopUpContainer";
import { useAppDispatch, useAppSelector } from "store/useStoreHooks";
import { switchLanguage } from "store/slices/authenticate/Authenticate";

export const LanguagePopUp: React.FC<DefaultLanguagePopUpProps> = ({
  callbackHandler,
}) => {
  const { IndiaFlag } = amazonIcons;
  const dispatch = useAppDispatch();
  const { currentLanguage } = useAppSelector((state) => state.authenticate);

  const switchLang = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.value) return;
    dispatch(
      switchLanguage(
        event.target.value as
          | "EN"
          | "HI"
          | "TA"
          | "TE"
          | "KN"
          | "BN"
          | "ML"
          | "MR"
      )
    );
  };

  return (
    <LanguagePopUpContainer onMouseLeave={callbackHandler}>
      <div className="upper-triangle"></div>
      <div className="pick-lang-option pick-lang-option-default">
        <label htmlFor="English">English - EN</label>
        <input
          type="radio"
          name="lang-switcher"
          onChange={switchLang}
          value="EN"
          id="English"
          checked={currentLanguage === "EN"}
        />
      </div>
      <div className="menu-divider"></div>
      <div className="pick-lang-option">
        <label htmlFor="Hindi">हिन्दी - HI</label>
        <input
          type="radio"
          name="lang-switcher"
          onChange={switchLang}
          value="HI"
          id="Hindi"
          checked={currentLanguage === "HI"}
        />
      </div>
      <div className="pick-lang-option">
        <label htmlFor="Tamil">தமிழ் - TA</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Tamil"
          onChange={switchLang}
          value="TA"
          checked={currentLanguage === "TA"}
        />
      </div>
      <div className="pick-lang-option">
        <label htmlFor="Telugu">తెలుగు - TE</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Telugu"
          onChange={switchLang}
          value="TE"
          checked={currentLanguage === "TE"}
        />
      </div>
      <div className="pick-lang-option">
        <label htmlFor="Kannada">ಕನ್ನಡ - KN</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Kannada"
          onChange={switchLang}
          value="KN"
          checked={currentLanguage === "KN"}
        />
      </div>
      <div className="pick-lang-option">
        <label htmlFor="Bangala">বাংলা - BN</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Bangala"
          onChange={switchLang}
          value="BN"
          checked={currentLanguage === "BN"}
        />
      </div>
      <div className="pick-lang-option">
        <label htmlFor="Malyalam">മലയാളം - ML</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Malyalam"
          onChange={switchLang}
          value="ML"
          checked={currentLanguage === "ML"}
        />
      </div>
      <div className="pick-lang-option pick-lang-option-default">
        <label htmlFor="Marathi">मराठी - MR</label>
        <input
          type="radio"
          name="lang-switcher"
          id="Marathi"
          onChange={switchLang}
          value="MR"
          checked={currentLanguage === "MR"}
        />
      </div>
      <div className="menu-divider"></div>
      <div className="shopping-and-change-country-button">
        <img src={IndiaFlag} alt="Great India Flag" />

        <div className="shopping-country">
          <p>You are shopping on Amazon.in</p>
          <Link to="/">Change country/region</Link>
        </div>
      </div>
    </LanguagePopUpContainer>
  );
};
