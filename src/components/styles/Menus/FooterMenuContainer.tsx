import styled from "styled-components";

export const FooterMenuContainer = styled.div`
  width: 100%;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.secondary.darkBlueSubHeader};

  & .footer-menu {
    width: 850px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-evenly;
    margin-inline: auto;
    padding-block: ${({ theme }) => theme.spaces.xxl2};
    background-color: ${({ theme }) =>
      theme.colors.secondary.darkBlueSubHeader};
    padding-inline: ${({ theme }) => theme.spaces.s};

    & > div {
      margin-right: ${({ theme }) => theme.spaces.xxl5};
    }

    & > div:last-of-type {
      margin-right: 0;
    }
  }

  & .footer-country-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-color: #3a4553;
    border-top-width: 1px;
    border-top-style: solid;
    padding: ${({ theme }) => `0 0 ${theme.spaces.m} 0`};
    background-color: ${({ theme }) =>
      theme.colors.secondary.darkBlueSubHeader};
    padding-inline: ${({ theme }) => theme.spaces.s};

    & .first-section {
      display: flex;
      align-items: center;
      margin-block: ${({ theme }) => theme.spaces.l};

      & button {
        margin-left: ${({ theme }) => theme.spaces.xxl4};
      }
    }
  }

  & .footer-secondary-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #131a22;
    width: 100%;
    height: 100%;

    & .secondary-menu {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      align-content: center;
      justify-content: space-evenly;
      align-items: center;
      width: 850px;
      margin-inline: auto;
      grid-row-gap: ${({ theme }) => theme.spaces.xl};
      padding: ${({ theme }) => `${theme.spaces.xl} 0 ${theme.spaces.xl} 0`};
    }

    & .tertiary {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: ${({ theme }) => `0 0 ${theme.spaces.xl} 0`};

      & p {
        margin-left: ${({ theme }) => theme.spaces.m};
      }
    }
  }
`;
