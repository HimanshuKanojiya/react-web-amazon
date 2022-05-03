import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 569px;
  margin-right: ${({ theme }) => theme.spaces.s};
  border-style: solid;
  border-width: 2px;
  border-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  height: 32px;

  & .search-select-category {
    min-width: 80px;
    max-width: 200px;
    width: min-content;
    height: 100%;
  }

  & .search-product {
    height: 100%;
    width: 360px;
  }

  & .search-query-submit {
    height: 100%;
    width: 40px;
  }
`;
