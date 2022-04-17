import styled from "styled-components";

export const ActionBasedButtonStyle = styled.button`
  height: 29px;
  border: 1px solid;
  border-radius: 2px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary.black};
  box-shadow: 0 1px 0 rgb(255 255 255 / 60%) inset;
  border-color: #a88734 #9c7e31 #846a29;
  background: ${({ theme }) => theme.colors.gradient.gradient1};

  &:hover {
    filter: brightness(0.97);
  }
`;
