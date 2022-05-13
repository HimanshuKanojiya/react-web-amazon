import React from "react";
import { Link } from "react-router-dom";
import { amazonIcons } from "assets/icons";
import { LanguagePopUpContainer } from "components/styles/Popups/LanguagePopUpContainer";
import { useAppDispatch } from "store/useStoreHooks";
import { switchLanguage } from "store/slices/authenticate/Authenticate";

export const LanguagePopUp: React.FC<DefaultLanguagePopUpProps> = ({
  callbackHandler,
}) => {
  const { IndiaFlag } = amazonIcons;
  const dispatch = useAppDispatch();

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
          defaultChecked
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
