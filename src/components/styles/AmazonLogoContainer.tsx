import styled from "styled-components";

export const AmazonLogoContainer = styled.a`
  display: flex;
  align-items: center;
  width: 96px;
  min-width: 96px;
  text-decoration: none;
  margin-right: ${({ theme }) => theme.spaces.m};

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
