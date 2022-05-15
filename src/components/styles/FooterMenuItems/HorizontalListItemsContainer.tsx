import styled from "styled-components";

export const HorizontalListItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary.white};

  & strong {
    font-size: 16px;
    margin-bottom: ${({ theme }) => theme.spaces.s};
  }

  & a {
    font-size: 14px;
    color: ${({ theme }) => theme.colors.secondary.grey};
    margin-bottom: ${({ theme }) => theme.spaces.xs};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
