import styled from "styled-components";

export const SignUpFormContainer = styled.div`
  width: 348px;
  height: fit-content;
  padding: 20px 26px;
  border: 1px solid;
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.secondary.grey};

  & .sign-up-title {
    font-family: var(--amazon-regular-ember);
    font-size: 28px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: ${({ theme }) => theme.spaces.s};
  }

  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & label {
      margin-bottom: ${({ theme }) => theme.spaces.xxs};
    }

    & label strong {
      font-size: 13px;
    }

    & .user-name,
    & .user-password,
    & .user-email {
      width: 100%;
      height: 32px;
      padding: 4px 8px;
      border-radius: 4px;
      border: 1px solid #a6a6a6;
      border-top-color: #949494;
      box-shadow: 0 1px 0 rgb(255 255 255 / 50%), 0 1px 0 rgb(0 0 0 / 7%) inset;
      outline: 0;
      margin-bottom: ${({ theme }) => theme.spaces.xs};

      &:focus {
        border-color: #e77600;
        box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
      }
    }

    & .create-account-cta {
      display: flex;
      flex-direction: column;
      margin-top: ${({ theme }) => theme.spaces.s};

      & p {
        font-size: 13px;
        margin-bottom: ${({ theme }) => theme.spaces.m};
      }
    }

    & .switch-to-login {
      display: flex;
      align-items: center;
      margin-top: ${({ theme }) => theme.spaces.m};

      & p,
      button {
        font-size: 13px;
      }

      & button {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.secondary.blue};
        margin-left: ${({ theme }) => theme.spaces.xxs};

        & svg {
          background-color: transparent;
          color: #767676;
          width: 12px;
          height: 12px;
        }

        &:hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary.orange_2};
        }
      }
    }
  }
`;
