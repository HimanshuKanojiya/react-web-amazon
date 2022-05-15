import styled from "styled-components";

export const GlobeLangSwitcherContainer = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: solid 1px ${({ theme }) => theme.colors.secondary.grey};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  color: ${({ theme }) => theme.colors.secondary.grey};
  padding-inline: ${({ theme }) => theme.spaces.xs};
  width: 120px;
  height: 34px;
  cursor: pointer;
  position: relative;

  & svg {
    margin-right: ${({ theme }) => theme.spaces.xs};
  }

  & .language-switcher-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;

    & svg:first-of-type {
      width: 8px;
      height: 8px;
      color: ${({ theme }) => theme.colors.secondary.grey2};
      transform: rotate(180deg);
    }

    & svg:last-of-type {
      width: 8px;
      height: 8px;
      color: ${({ theme }) => theme.colors.secondary.grey2};
      transform: rotate(90deg);
    }
  }
`;
