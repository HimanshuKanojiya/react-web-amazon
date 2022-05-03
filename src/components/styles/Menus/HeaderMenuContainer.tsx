import styled from "styled-components";

export const HeaderMenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${({ theme }) => `${theme.spaces.s} ${theme.spaces.s}`};
  background-color: ${({ theme }) => theme.colors.secondary.darkBlack2};
  color: ${({ theme }) => theme.colors.primary.white};

  .amazon-logo {
    display: flex;
    align-items: center;
    width: 96px;
    text-decoration: none;
    margin-right: ${({ theme }) => theme.spaces.m};

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .amazon-choose-address {
    display: flex;
    align-items: center;
    margin-right: ${({ theme }) => theme.spaces.s};

    & svg {
      width: 16px;
      height: 16px;
      margin: ${({ theme }) => `${theme.spaces.xs} ${theme.spaces.xxs} 0 0`};
    }

    & .amazon-choose-address-pick {
      display: flex;
      flex-direction: column;
      justify-content: center;

      & p {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.secondary.grey2};
      }

      & strong {
        font-size: 14px;
        font-weight: 700;
        color: ${({ theme }) => theme.colors.primary.white};
      }
    }
  }
`;
