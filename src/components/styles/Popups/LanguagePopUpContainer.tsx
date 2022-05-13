import styled from "styled-components";

export const LanguagePopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 0;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary.white};
  color: ${({ theme }) => theme.colors.primary.black};
  padding: ${({ theme }) => theme.spaces.s};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  font-size: 13px;
  width: 240px;

  & .upper-triangle {
    width: 40px;
    height: 40px;
    position: absolute;
    top: -30px;
    left: 22px;
    background-color: ${({ theme }) => theme.colors.primary.white};
    clip-path: polygon(50% 59%, 0% 100%, 100% 100%);
  }

  & .pick-lang-option {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: flex-end;
    gap: ${({ theme }) => theme.spaces.xs};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
    cursor: pointer;
    width: 100%;

    input[type="radio"] {
      -webkit-appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid ${({ theme }) => theme.colors.secondary.darkGrey};
      border-radius: 50%;
      outline: none;
    }

    input[type="radio"]:hover {
      box-shadow: 0 0 5px 0px orange inset;
    }

    input[type="radio"]:before {
      content: "";
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;
      height: 80%;
      margin: 10% auto;
      border-radius: 50%;
    }

    input[type="radio"]:checked::before {
      background: ${({ theme }) => theme.colors.primary.orange_2};
    }
  }

  & .pick-lang-option:hover > label {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary.orange_2};
    text-decoration: underline;
  }

  & .pick-lang-option-default {
    margin: 0;
  }

  & .menu-divider {
    width: -webkit-fill-available;
    height: 1.8px;
    background-color: ${({ theme }) => theme.colors.secondary.grey};
    margin-left: ${({ theme }) => theme.spaces.m};
    margin-block: ${({ theme }) => theme.spaces.s};
  }

  & .shopping-and-change-country-button {
    display: flex;
    align-items: flex-start;

    & img {
      width: 16px;
      height: 16px;
      object-fit: contain;
      object-position: center;
      margin-right: ${({ theme }) => theme.spaces.xs};
    }

    & .shopping-country {
      display: flex;
      flex-direction: column;

      & p {
        font-size: 13px;
        margin-bottom: ${({ theme }) => theme.spaces.s};
        color: ${({ theme }) => theme.colors.primary.black};
      }

      & a {
        color: ${({ theme }) => theme.colors.secondary.blue};
        text-decoration: none;
      }
    }
  }
`;
