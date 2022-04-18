import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spaces.s};
  width: 100%;
  height: 100vh;
`;
