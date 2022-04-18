import React, { useState } from "react";
import { FormContainer } from "components/styles/Login/FormContainer";
import { Link } from "react-router-dom";
import { amazonIcons } from "../../../assets/icons/index";
import { DefaultActionBasedButton } from "../Button/DefaultActionBasedButton";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import {
  addUserEmail,
  addUserPassword,
} from "store/slices/authenticate/Authenticate";

export const Form: React.FC = () => {
  const [isPasswordSectionEnable, updatePasswordSection] =
    useState<boolean>(false);
  const [isNeedHelpExtended, updateNeedHelpExtend] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { userEmail, userPassword, inputUIValidation } = useAppSelector(
    (state) => state.authenticate
  );

  const { ExtendOption, LessOption } = amazonIcons;

  const enablePasswordSection = () => {
    if (!inputUIValidation.isUserEmailValid) return;
    if (!userEmail) return;

    updatePasswordSection((prevState) => !prevState);
  };

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <FormContainer>
      <h1 className="login-title">Sign-In</h1>
      <form onSubmit={formSubmit}>
        {!isPasswordSectionEnable && (
          <>
            <label htmlFor="user-email">
              <strong>Email or mobile phone number</strong>
            </label>
            <input
              type="text"
              name="user-email"
              id="user-email"
              className="user-email"
              value={userEmail}
              onChange={(e) => {
                dispatch(addUserEmail(e.currentTarget.value));
              }}
              required
            />
            <DefaultActionBasedButton
              ctaText="Continue"
              ctaAction={enablePasswordSection}
            />
            <p className="terms-and-condition-disclaimer">
              By continuing, you agree to Amazon's
              <a href="/">Condition of use</a>and<a href="/">Privacy Notice</a>
            </p>
            <div className="expand-option">
              <button
                type="button"
                className="expand-option-need-help"
                onClick={() => updateNeedHelpExtend((prevState) => !prevState)}
              >
                {!isNeedHelpExtended ? <ExtendOption /> : <LessOption />}
                <p>Need help?</p>
              </button>
              {isNeedHelpExtended && (
                <ul className="extended-options-list">
                  <li>
                    <Link to="/">Forgot Password</Link>
                  </li>
                  <li>
                    <Link to="/">Other issues with Sign-In</Link>
                  </li>
                </ul>
              )}
            </div>
          </>
        )}
        {isPasswordSectionEnable && (
          <>
            <div className="preview-user-email">
              <p>{userEmail}</p>
              <button onClick={enablePasswordSection}>Change</button>
            </div>

            <div className="user-password-section">
              <label className="user-password-label" htmlFor="user-password">
                <strong>Password</strong>
                <button>Forgot Password</button>
              </label>
              <input
                type="password"
                name="user-password"
                id="user-password"
                className="user-password"
                autoComplete="false"
                value={userPassword}
                onChange={(e) =>
                  dispatch(addUserPassword(e.currentTarget.value))
                }
              />
            </div>

            <DefaultActionBasedButton
              ctaText="Sign In"
              ctaAction={enablePasswordSection}
            />

            <div className="keep-me-sign-section">
              <input
                type="checkbox"
                name="keep-me-signed-in"
                id="keep-me-signed-in"
              />
              <label htmlFor="keep-me-signed-in">
                <p>Keep me signed in.</p>
              </label>
            </div>
          </>
        )}
      </form>
    </FormContainer>
  );
};
