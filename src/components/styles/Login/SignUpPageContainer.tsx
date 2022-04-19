import styled from "styled-components";

export const SignUpPageContainer = styled.div`
  display: flex;
  font-family: var(--amazon-regular-ember);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: ${({ theme }) => theme.spaces.s};
  width: 100%;
  height: 100vh;
`;
