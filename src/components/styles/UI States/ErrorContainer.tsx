import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 348px;
  border: solid 1px ${({ theme }) => theme.colors.secondary.red};
  border-radius: 4px;
  box-shadow: 0 0 0 4px ${({ theme }) => theme.colors.primary.white};
  padding-block: ${({ theme }) => theme.spaces.s};
  padding-inline: ${({ theme }) => theme.spaces.xs};
  margin-block: ${({ theme }) => theme.spaces.s};

  & .error-state-icon svg {
    width: 40px;
    height: 32px;
    color: ${({ theme }) => theme.colors.secondary.red};
  }

  & .error-state-reason {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${({ theme }) => `0 0 0 ${theme.spaces.s}`};

    & .error-state-title {
      color: ${({ theme }) => theme.colors.secondary.red};
      font-size: 17px;
      font-weight: normal;
    }

    & .error-state-issue {
      font-size: 13px;
      margin-top: ${({ theme }) => theme.spaces.xxs};
      color: ${({ theme }) => theme.colors.primary.black};
    }
  }
`;
