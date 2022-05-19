import styled from "styled-components";

export const MultiImageProductCardContainer = styled.div`
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

  & .sub-product-list-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: ${({ theme }) => theme.spaces.s};
    grid-row-gap: ${({ theme }) => theme.spaces.m};
    margin-bottom: ${({ theme }) => theme.spaces.l};

    & .sub-product-list-item {
      display: flex;
      flex-direction: column;
      text-decoration: none;

      & .product-item-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin-bottom: 0;
      }

      & .product-item-title {
        font-size: 12px;
        color: ${({ theme }) => theme.colors.primary.black};
      }
    }
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
