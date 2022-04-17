import styled from "styled-components";

export const FormContainer = styled.div`
  width: 348px;
  height: 280px;
  padding: 20px 26px;
  border: 1px solid;
  border-radius: 2px;
  border-color: ${({ theme }) => theme.colors.secondary.grey};

  & .login-title {
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

    & .user-email,
    & .user-password {
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

    & .terms-and-condition-disclaimer {
      font-size: 12px;
      color: ${({ theme }) => theme.colors.primary.black};
      margin-top: ${({ theme }) => theme.spaces.s};

      & a {
        margin-inline: 4px;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.secondary.blue};
        cursor: pointer;

        &:hover {
          color: #e77600;
          text-decoration: underline;
        }
      }
    }

    & .preview-user-email {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: ${({ theme }) => theme.spaces.s};

      & p,
      & button {
        font-size: 13px;
      }

      & button {
        margin-left: ${({ theme }) => theme.spaces.xxs};
        background-color: transparent;
        border: 0;
        outline: 0;
        color: ${({ theme }) => theme.colors.secondary.blue};
        cursor: pointer;
      }
      & button:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary.orange_2};
      }
    }

    & .user-password-section {
      margin-bottom: ${({ theme }) => theme.spaces.s};

      & .user-password-label {
        display: flex;
        align-items: center;

        & button {
          margin-left: auto;
          background-color: transparent;
          border: 0;
          outline: 0;
          color: ${({ theme }) => theme.colors.secondary.blue};
          cursor: pointer;

          & button:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.primary.orange_2};
          }
        }
      }
    }

    & .keep-me-sign-section {
      display: flex;
      align-items: center;
      vertical-align: center;
      margin-top: ${({ theme }) => theme.spaces.s};

      & label {
        display: flex;
        align-items: center;
        margin: ${({ theme }) => `0 0 0 ${theme.spaces.xxs}`};

        & p {
          font-size: 13px;
        }
      }
    }
  }
`;
