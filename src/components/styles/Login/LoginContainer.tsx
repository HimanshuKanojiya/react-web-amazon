import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;

  & .amazon-logo {
    width: 120.1px;
    text-decoration: none;
    margin-bottom: ${({ theme }) => theme.spaces.s};

    & img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  & .sign-up-option {
    margin: ${({ theme }) => `${theme.spaces.s} 0`};

    & .new-to-amazon-headline {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      margin-bottom: ${({ theme }) => theme.spaces.xs};

      & span {
        flex: 1;
        border: 0;
        outline: 0;
        background-color: ${({ theme }) => theme.colors.secondary.grey};
        width: 100%;
        height: 1px;
      }

      & p {
        padding-inline: ${({ theme }) => theme.spaces.xs};
        font-size: 12px;
        color: #767676;
      }
    }
  }
`;
