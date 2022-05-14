import styled from "styled-components";

export const LanguageSwitcherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spaces.s};
  cursor: pointer;
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
`;
