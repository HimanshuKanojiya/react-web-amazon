import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 569px;
  margin-right: ${({ theme }) => theme.spaces.s};
  //border: 0;
  //outline: 0;
  height: 40px;

  & .search-select-category {
    min-width: 50px;
    width: auto;
    height: 100%;
    outline: 0;
    border-top-left-radius: ${({ theme }) => theme.borderRadius.xxs};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xxs};
  }

  & .search-select-cat-w-extend-a {
    max-width: 110px;
  }

  & .search-select-cat-w-extend-b {
    max-width: 125px;
  }

  & .search-select-cat-w-extend-c {
    max-width: 154px;
  }

  & .search-select-cat-w-extend-d {
    max-width: 215px;
  }

  & .search-product {
    height: 100%;
    width: 100%;
    /* border: 0;
    outline: 0; */
  }

  & .search-query-submit {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 48px;
    background-color: ${({ theme }) => theme.colors.primary.orange_3};
    padding: ${({ theme }) => theme.spaces.xs};
    border-top-right-radius: ${({ theme }) => theme.borderRadius.xxs};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.xxs};
    border: none;

    & svg {
      width: 100%;
      height: 100%;
    }
  }
`;
