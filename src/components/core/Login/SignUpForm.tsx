import React from "react";
import { SignUpFormContainer } from "components/styles/Login/SignUpFormContainer";
import { DefaultActionBasedButton } from "../Button/DefaultActionBasedButton";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import { amazonIcons } from "assets/icons";
import { addBasicInfo, validateUIInputs } from "store/slices/signup/SignUp";
import { useNavigate } from "react-router-dom";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import countriesData from "../../../assets/countries.json";
import { useEffect } from "react";

export const SignUpForm: React.FC = () => {
  const { ExtendOption, InfoIcon, AttentionIcon } = amazonIcons;

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const {
    userName,
    userPassword,
    userCountryCode,
    userPhone,
    userEmail,
    inputUIValidation,
  } = useAppSelector((state) => state.signUp);

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

  useEffect(() => {
    console.log(inputUIValidation);
  }, [inputUIValidation]);

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SignUpFormContainer>
      <h1 className="sign-up-title">Create Account</h1>
      <form onSubmit={formSubmit}>
        <label htmlFor="user-name">
          <strong>Your Name</strong>
        </label>
        <input
          type="text"
          name="user-name"
          id="user-name"
          className="user-name"
          pattern="[a-zA-Z]+"
          autoComplete="off"
          value={userName}
          onChange={(e) => {
            dispatchActionReducerCallback({
              inputName: "addUserFullName",
              inputValue: e.target.value,
              reducerCallBack: addBasicInfo,
            });
          }}
          onBlur={(e) => {
            dispatchActionReducerCallback({
              inputName: "isUserNameValid",
              inputValue: !e.target.validity.valid,
              reducerCallBack: validateUIInputs,
            });
          }}
          required
        />

        {inputUIValidation.isUserNameValid && (
          <p className="user-info-error">
            <AttentionIcon /> Enter your name.
          </p>
        )}

        <label htmlFor="user-phone">
          <strong>Mobile number</strong>
        </label>
        <div className="user-phone-section">
          <select
            className="user-country-code"
            name="countries-code"
            id="select-contry-code"
            autoComplete="off"
            value={userCountryCode}
            onChange={(e) => {
              dispatchActionReducerCallback({
                inputName: "addUserCountryCode",
                inputValue: e.target.value,
                reducerCallBack: addBasicInfo,
              });
            }}
          >
            {countriesData.map((country) => {
              return (
                <option
                  key={country.name}
                  value={country.dialCode}
                >{`${country.isoCode} ${country.dialCode}`}</option>
              );
            })}
          </select>
          <div className="user-phone-input-section">
            <input
              type="tel"
              name="user-phone"
              id="user-phone"
              className="user-phone"
              value={userPhone}
              placeholder="Mobile number"
              pattern="[0-9]{10,10}"
              min={10}
              max={10}
              autoComplete="off"
              onChange={(e) => {
                dispatchActionReducerCallback({
                  inputName: "addUserPhone",
                  inputValue: e.target.value,
                  reducerCallBack: addBasicInfo,
                });
              }}
              onBlur={(e) => {
                dispatchActionReducerCallback({
                  inputName: "isUserPhoneValid",
                  inputValue: !e.target.validity.valid,
                  reducerCallBack: validateUIInputs,
                });
              }}
              required
            />
            {inputUIValidation.isUserPhoneValid && (
              <p className="user-info-error">
                <AttentionIcon /> Enter your mobile number.
              </p>
            )}
          </div>
        </div>

        <label htmlFor="user-email">
          <strong>Email (Optional)</strong>
        </label>
        <input
          type="email"
          name="user-email"
          id="user-email"
          className="user-email"
          pattern="^[a-zA-Z0-9]+[a-zA-Z0-9-+_.]+@[a-zA-Z0-9+-]+\.([a-zA-Z0-9.])+"
          value={userEmail}
          autoComplete="off"
          onChange={(e) => {
            dispatchActionReducerCallback({
              inputName: "addUserEmail",
              inputValue: e.target.value,
              reducerCallBack: addBasicInfo,
            });
          }}
          onBlur={(e) => {
            dispatchActionReducerCallback({
              inputName: "isUserEmailValid",
              inputValue: !e.target.validity.valid,
              reducerCallBack: validateUIInputs,
            });
          }}
          required
        />
        {inputUIValidation.isUserEmailValid && (
          <p className="user-info-error">
            <AttentionIcon /> Enter a valid email address.
          </p>
        )}

        <label htmlFor="user-password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          className="user-password"
          placeholder="At least 6 characters"
          min={6}
          autoComplete="off"
          value={userPassword}
          onChange={(e) => {
            dispatchActionReducerCallback({
              inputName: "addUserPassword",
              inputValue: e.target.value,
              reducerCallBack: addBasicInfo,
            });
          }}
          onBlur={(e) => {
            dispatchActionReducerCallback({
              inputName: "isUserPasswordValid",
              inputValue: !e.target.validity.valid,
              reducerCallBack: validateUIInputs,
            });
          }}
          required
        />
        {inputUIValidation.isUserPasswordValid && (
          <p className="user-info-error">
            <AttentionIcon /> Enter your password.
          </p>
        )}

        <p className="user-password-info">
          <InfoIcon /> Passwords must be at least 6 characters.
        </p>

        <div className="create-account-cta">
          <p>
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </p>
          <DefaultActionBasedButton
            ctaText="Continue"
            type="submit"
            isDisabled={false}
            ctaAction={() => console.log("SUBMITTED!")}
          />
        </div>

        <div className="switch-to-login">
          <p>Already have an account?</p>
          <button type="button" onClick={() => navigation("/login")}>
            Sign in <ExtendOption />
          </button>
        </div>
      </form>
    </SignUpFormContainer>
  );
};
