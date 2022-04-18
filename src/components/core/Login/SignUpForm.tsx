import React from "react";
import { SignUpFormContainer } from "components/styles/Login/SignUpFormContainer";
import { DefaultActionBasedButton } from "../Button/DefaultActionBasedButton";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import { amazonIcons } from "assets/icons";
import {
  addFullName,
  addUserEmail,
  addUserPhone,
  addUserPassword,
} from "store/slices/signup/SignUp";
import { useNavigate } from "react-router-dom";

export const SignUpForm: React.FC = () => {
  const { ExtendOption } = amazonIcons;

  const dispatch = useAppDispatch();

  const navigation = useNavigate();

  const { userName, userPassword, userPhone, userEmail } = useAppSelector(
    (state) => state.signUp
  );

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
          value={userName}
          onChange={(e) => {
            dispatch(addFullName(e.currentTarget.value));
          }}
          required
        />

        <label htmlFor="user-email">
          <strong>Email (Optional)</strong>
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

        <label htmlFor="user-password">
          <strong>Password</strong>
        </label>
        <input
          type="password"
          name="user-password"
          id="user-password"
          className="user-password"
          value={userPassword}
          onChange={(e) => {
            dispatch(addUserPassword(e.currentTarget.value));
          }}
          required
        />

        <div className="create-account-cta">
          <p>
            We will send you a text to verify your phone. Message and Data rates
            may apply.
          </p>
          <DefaultActionBasedButton
            ctaText="Continue"
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
