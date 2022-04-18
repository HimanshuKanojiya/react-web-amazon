import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spaces.m};
  background-image: linear-gradient(
    to right,
    #fff,
    rgba(255, 255, 255, 0),
    #fff
  );

  & .footer-links {
    display: flex;

    & li {
      display: flex;
      align-items: center;
      font-size: 11px;
      list-style-type: none;
      margin-right: ${({ theme }) => theme.spaces.s};
      margin-bottom: ${({ theme }) => theme.spaces.xs};

      & a {
        color: ${({ theme }) => theme.colors.secondary.blue};
        text-decoration: none;

        &:hover {
          color: ${({ theme }) => theme.colors.primary.orange_2};
          text-decoration: underline;
        }
      }
    }

    & li:last-of-type {
      margin-right: 0;
    }
  }

  & .footer-disclaimer {
    font-size: 11px;
    color: #555555;
  }
`;
