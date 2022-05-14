import styled from "styled-components";

export const DualTextItemContainer = styled.button`
  position: relative;
  background-color: transparent;
  margin-right: ${({ theme }) => theme.spaces.s};
  border: 0;
  text-align: left;

  & .text-items {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.white};
    cursor: pointer;

    & svg {
      width: 16px;
      height: 16px;
      margin: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.xxs} 0 0`};
    }

    & .ItemTextContainer {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      text-align: none;

      & p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.secondary.grey2};
      }

      & strong {
        font-size: 14px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary.white};
        white-space: nowrap;
      }
    }
  }
`;
