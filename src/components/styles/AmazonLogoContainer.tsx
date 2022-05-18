import styled from "styled-components";

export const AmazonLogoContainer = styled.a<AmazonLogoContainerProps>`
  display: flex;
  align-items: center;
  width: 96px;
  min-width: 96px;
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spaces.m};

  & .amazon-logo {
    background-image: url(${({ AmazonNavSprite }) => AmazonNavSprite});
    width: 96px;
    height: 32px;
    background-position: -7px -48px;
    background-size: 336px;
  }
`;
