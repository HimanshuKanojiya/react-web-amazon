import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spaces.s};
  position: relative;

  & .lang-flag {
    display: flex;
    align-items: center;
    justify-content: center;

    & img {
      width: 32px;
      height: 24px;
      object-fit: fill;
      object-position: center;
    }

    & svg {
      margin-left: ${({ theme }) => theme.spaces.xxs};
      color: ${({ theme }) => theme.colors.secondary.grey2};
      width: 12px;
      height: 12px;
    }
  }

  & .show-language {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: absolute;
    top: 30px;
    left: 0;
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
      margin-block: ${({ theme }) => theme.spaces.xs};
      width: 100%;
    }

    & .pick-lang-option-default {
      padding-bottom: ${({ theme }) => theme.spaces.s};
      border-bottom-style: solid;
      border-bottom-width: 2px;
      border-bottom-color: ${({ theme }) => theme.colors.secondary.grey};
    }

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
      width: 60%;
      height: 60%;
      margin: 20% auto;
      border-radius: 50%;
    }

    input[type="radio"]:checked::before {
      background: ${({ theme }) => theme.colors.primary.orange_2};
    }
  }

  & .display-show-more-lang {
    display: flex;
  }
`;
