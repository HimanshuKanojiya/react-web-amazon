import styled from "styled-components";

export const FooterMenuContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary.darkBlueSubHeader};

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
`;
