import React, { useEffect, useState } from "react";
import { FormContainer } from "components/styles/Login/FormContainer";
import { Link } from "react-router-dom";
import { amazonIcons } from "../../../assets/icons/index";
import { DefaultActionBasedButton } from "../Button/DefaultActionBasedButton";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import {
  addLoginInfo,
  validateUserInputs,
  verifyLoginInputs,
} from "store/slices/authenticate/Authenticate";
import { performSignInToFirebase } from "store/slices/authenticate/Authenticate";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export const Form: React.FC = () => {
  const [isPasswordSectionEnable, updatePasswordSection] =
    useState<boolean>(false);
  const [isNeedHelpExtended, updateNeedHelpExtend] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {
    userEmail,
    userPassword,
    inputUIValidation,
    isLoginInputValid,
    error,
  } = useAppSelector((state) => state.authenticate);

  const { ExtendOption, LessOption } = amazonIcons;

  const enablePasswordSection = () => {
    if (!inputUIValidation.isUserEmailValid) return;
    if (!userEmail) return;

    updatePasswordSection((prevState) => !prevState);
  };

  const dispatchActionReducerCallback = ({
    inputName,
    inputValue,
    reducerCallBack,
  }: {
    inputName: string;
    inputValue: string | number | boolean;
    reducerCallBack: ActionCreatorWithPayload<any, string>;
  }) => {
    dispatch(reducerCallBack({ inputName, inputValue }));
  };

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isLoginInputValid) return;

    dispatch(
      performSignInToFirebase({
        userEmail,
        userPassword,
      })
    );
  };

  useEffect(() => {
    dispatch(
      verifyLoginInputs({
        userEmail,
        userPassword,
      })
    );
    if (!error) return;
    console.log(error);
  }, [userEmail, userPassword, dispatch, error]);

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
              pattern="^[a-zA-Z0-9]+[a-zA-Z0-9-+_.]+@[a-zA-Z0-9+-]+\.([a-zA-Z0-9.])+"
              value={userEmail}
              onChange={(e) => {
                dispatchActionReducerCallback({
                  inputName: "addUserEmail",
                  inputValue: e.target.value,
                  reducerCallBack: addLoginInfo,
                });

                dispatchActionReducerCallback({
                  inputName: "isLoginEmailValid",
                  inputValue: e.target.validity.valid,
                  reducerCallBack: validateUserInputs,
                });
              }}
              required
            />
            <DefaultActionBasedButton
              ctaText="Continue"
              type="button"
              isDisabled={!inputUIValidation.isUserEmailValid}
              ctaAction={enablePasswordSection}
            />
            <p className="terms-and-condition-disclaimer">
              By continuing, you agree to Amazon's
              <Link to="/">Condition of use</Link>and
              <Link to="/">Privacy Notice</Link>
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
              <button type="button" onClick={enablePasswordSection}>
                Change
              </button>
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
                autoComplete="off"
                min={6}
                max={24}
                value={userPassword}
                onChange={(e) => {
                  dispatchActionReducerCallback({
                    inputName: "addUserPassword",
                    inputValue: e.target.value,
                    reducerCallBack: addLoginInfo,
                  });

                  dispatchActionReducerCallback({
                    inputName: "isLoginPasswordValid",
                    inputValue: e.target.validity.valid,
                    reducerCallBack: validateUserInputs,
                  });
                }}
                required
              />
            </div>

            <DefaultActionBasedButton
              type="submit"
              ctaText="Sign In"
              isDisabled={false}
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
