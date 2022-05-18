import styled from "styled-components";

export const OneImageProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  padding-inline: ${({ theme }) => theme.spaces.m};
  padding-block: ${({ theme }) => theme.spaces.s};
  max-width: 400px;
  height: 424px;
  box-sizing: border-box;

  & .product-title {
    font-size: 21px;
    color: ${({ theme }) => theme.colors.primary.black};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
  }

  & .product-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-bottom: ${({ theme }) => theme.spaces.s};
  }

  & .product-link {
    text-decoration: none;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.secondary.blue};

    &:hover {
      text-decoration: underline;
      color: ${({ theme }) => theme.colors.primary.orange_2};
    }
  }
`;
