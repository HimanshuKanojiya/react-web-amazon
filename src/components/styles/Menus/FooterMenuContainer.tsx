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

      & .change-language-switcher {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: solid 1px ${({ theme }) => theme.colors.secondary.grey};
        border-radius: ${({ theme }) => theme.borderRadius.xxs};
        color: ${({ theme }) => theme.colors.secondary.grey};
        padding-inline: ${({ theme }) => theme.spaces.xs};
        margin-left: ${({ theme }) => theme.spaces.xxl4};
        width: 120px;
        height: 34px;

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
      }
    }
  }
`;
