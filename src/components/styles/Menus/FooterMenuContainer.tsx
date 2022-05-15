import styled from "styled-components";

export const FooterMenuContainer = styled.div`
  width: 100%;
  margin-top: auto;
  background-color: ${({ theme }) => theme.colors.secondary.darkBlueSubHeader};
  padding-inline: ${({ theme }) => theme.spaces.s};
  padding-bottom: ${({ theme }) => theme.spaces.m};

  & .footer-menu {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    padding-block: ${({ theme }) => theme.spaces.xxl2};

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
    margin-top: ${({ theme }) => theme.spaces.xl};

    & .first-section {
      display: flex;
      align-items: center;
      margin-block: ${({ theme }) => theme.spaces.m};

      & button {
        margin-left: ${({ theme }) => theme.spaces.xxl4};
      }
    }
  }
`;
