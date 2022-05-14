import styled from "styled-components";

export const SubHeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary.darkBlueSubHeader};
  padding-inline: ${({ theme }) => theme.spaces.s};
  padding-block: ${({ theme }) => theme.spaces.xs};
  box-sizing: border-box;

  & button {
    font-size: 14px;
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary.white};
    padding: ${({ theme }) => `${theme.spaces.xxs} ${theme.spaces.xxs}`};
    margin-right: ${({ theme }) => theme.spaces.xs};
    cursor: pointer;

    & svg {
      width: 16px;
      height: 16px;
      margin-right: ${({ theme }) => theme.spaces.xxs};
    }

    &:hover {
      outline-style: solid;
      border-radius: 1px;
      outline-width: 2px;
      outline-color: ${({ theme }) => theme.colors.primary.white};
    }
  }

  & a {
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.primary.white};
    padding: ${({ theme }) => `${theme.spaces.xxs} ${theme.spaces.xxs}`};
    margin-right: ${({ theme }) => theme.spaces.xs};
    cursor: pointer;
  }

  & a:hover {
    outline-style: solid;
    border-radius: 1px;
    outline-width: 1px;
    outline-color: ${({ theme }) => theme.colors.primary.white};
  }
`;
