import styled from "styled-components";

export const ListAccountMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 40px;
  right: -30px;
  z-index: 1;
  background-color: ${({ theme }) => theme.colors.primary.white};
  color: ${({ theme }) => theme.colors.primary.black};
  padding: ${({ theme }) => theme.spaces.s};
  border-radius: ${({ theme }) => theme.borderRadius.xxs};
  width: fit-content;
  font-size: 13px;

  & .upper-triangle {
    width: 40px;
    height: 40px;
    position: absolute;
    top: -30px;
    right: 22px;
    background-color: ${({ theme }) => theme.colors.primary.white};
    clip-path: polygon(50% 59%, 0% 100%, 100% 100%);
  }

  & .is-logged-user {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & button {
      width: 200px;
    }

    & p {
      font-size: 11px;
      color: ${({ theme }) => theme.colors.primary.black};
      margin-block: ${({ theme }) => theme.spaces.xs};

      & a {
        color: ${({ theme }) => theme.colors.secondary.blue};
        white-space: nowrap;
        text-decoration: none;
        margin-bottom: ${({ theme }) => theme.spaces.xs};

        &:hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary.orange_2};
        }
      }
    }
  }

  & .menu-divider-vertical {
    width: -webkit-fill-available;
    height: 0.7px;
    background-color: ${({ theme }) => theme.colors.secondary.grey};
    margin-bottom: ${({ theme }) => theme.spaces.s};
  }

  & .sub-menu {
    display: flex;
    flex-direction: row;

    & .list-menu,
    & .account-menu {
      display: flex;
      flex-direction: column;

      & strong {
        font-size: 16px;
        margin-bottom: ${({ theme }) => theme.spaces.xs};
      }

      & a {
        font-size: 13px;
        color: #444;
        white-space: nowrap;
        text-decoration: none;
        margin-bottom: ${({ theme }) => theme.spaces.xs};

        &:hover {
          text-decoration: underline;
          color: ${({ theme }) => theme.colors.primary.orange_2};
        }
      }
    }

    & .menu-divider-horizontal {
      width: 0.8px;
      background-color: #dddddd;
      margin-inline: ${({ theme }) => theme.spaces.xxl};
    }
  }
`;
