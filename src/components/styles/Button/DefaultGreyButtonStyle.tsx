import styled from "styled-components";

export const DefaultGreyButtonStyle = styled.button`
  width: 349px;
  height: 29px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  border-radius: 2px;
  background: #e7e9ec;
  border-color: #adb1b8 #a2a6ac #8d9096;

  &:hover {
    filter: brightness(0.97);
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary.black};
    font-size: 13px;
    width: 100%;
    height: 100%;
  }
`;
