import styled from "styled-components";

export const VerticalListItemsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;

  & a,
  & p {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.secondary.grey};
    text-decoration: none;
    cursor: pointer;
    margin-right: ${({ theme }) => theme.spaces.s};

    &:hover {
      text-decoration: underline;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }

  & p {
    &:hover {
      text-decoration: none;
    }
  }
`;
