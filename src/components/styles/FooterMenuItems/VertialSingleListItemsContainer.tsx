import styled from "styled-components";

export const VertialSingleListItemsContainer = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary.white};
  }

  & strong {
    color: ${({ theme }) => theme.colors.secondary.grey};
    font-size: 11px;
    font-weight: 500;
  }

  & p {
    flex-wrap: wrap;
    overflow-wrap: break-word;
    white-space: wrap;
    width: 150px;
    font-size: 10px;
    color: #999;
  }
`;
