import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.primary.white};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  padding-inline: ${({ theme }) => theme.spaces.m};
  padding-block: ${({ theme }) => theme.spaces.s};
  width: 98.8%;
  position: relative;
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
    overflow-x: hidden;
    scroll-behavior: smooth;
    box-sizing: border-box;

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
      box-sizing: border;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: ${({ theme }) => theme.borderRadius.xxs};
      background-color: ${({ theme }) => theme.colors.secondary.grey2};
    }
  }

  & .carousel-controller-buttons {
    display: none;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 120px;
    border: 0;
    background-color: ${({ theme }) => theme.colors.primary.white};
    box-shadow: 0px 2px 0.4px 0px rgba(0, 0, 0, 0.5);
    top: 34%;
    cursor: pointer;

    & svg {
      width: 24px;
      height: 24px;
    }
  }

  & .carousel-controller-buttons-visible {
    display: flex;
  }

  & .carousel-back-button {
    position: absolute;
    border-top-right-radius: ${({ theme }) => theme.borderRadius.xxs};
    border-bottom-right-radius: ${({ theme }) => theme.borderRadius.xxs};
    left: 0;
    z-index: 1;
    margin-left: 24px;
  }

  & .carousel-next-button {
    position: absolute;
    border-top-left-radius: ${({ theme }) => theme.borderRadius.xxs};
    border-bottom-left-radius: ${({ theme }) => theme.borderRadius.xxs};
    right: 0;
    z-index: 1;
    margin-right: 24px;
  }
`;
