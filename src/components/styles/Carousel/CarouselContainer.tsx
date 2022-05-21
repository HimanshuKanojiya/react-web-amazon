import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  padding-inline: ${({ theme }) => theme.spaces.m};
  padding-block: ${({ theme }) => theme.spaces.s};
  width: 100%;
  box-sizing: border-box;

  & .carousel-bar-info {
    display: flex;
    align-items: center;
    margin-bottom: ${({ theme }) => theme.spaces.xs};

    & h2 {
      font-size: 21px;
      color: ${({ theme }) => theme.colors.primary.black};
      margin-right: ${({ theme }) => theme.spaces.s};
    }

    & a {
      text-decoration: none;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.secondary.blue};

      &:hover {
        text-decoration: underline;
        color: ${({ theme }) => theme.colors.primary.orange_2};
      }
    }
  }

  & .carousel-bar-slider {
    display: flex;
    width: 100%;
    align-items: center;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 0;
    }

    & > div {
      margin-right: ${({ theme }) => theme.spaces.xs};
    }

    & > div:last-of-type {
      margin-right: 0;
    }
  }

  & .carousel-with-hover {
    &::-webkit-scrollbar {
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }) => theme.borderRadius.xxs};
      background-color: ${({ theme }) => theme.colors.secondary.grey2};
    }
  }
`;
