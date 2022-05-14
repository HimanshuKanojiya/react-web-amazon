import React from "react";
import { ListAccountMenuContainer } from "components/styles/Menus/ListAccountMenuContainer";
import { Link } from "react-router-dom";
import { DefaultActionBasedButton } from "../Button/DefaultActionBasedButton";
import ListAccountMenuItems from "assets/list-account-items.json";
import { useAppSelector } from "store/useStoreHooks";
import { useNavigate } from "react-router-dom";

export const ListAccountMenu: React.FC<DefaultListAccountMenuProps> = ({
  callbackHandler,
}) => {
  const { isUserSignedIn } = useAppSelector((state) => state.authenticate);
  const history = useNavigate();

  return (
    <ListAccountMenuContainer onMouseLeave={callbackHandler}>
      <div className="upper-triangle"></div>
      {!isUserSignedIn && (
        <>
          <div className="is-logged-user">
            <DefaultActionBasedButton
              type="submit"
              ctaText="Sign In"
              ctaAction={() => history("/login")}
              isDisabled={false}
            />
            <p className="new-customer">
              New customer? <Link to="/">Start here</Link>
            </p>
          </div>
          <div className="menu-divider-vertical"></div>
        </>
      )}
      <div className="sub-menu">
        <div className="list-menu">
          <strong>Your Lists</strong>
          {ListAccountMenuItems.listMenu.map((menuItem) => {
            return (
              <Link key={menuItem.displayText} to={menuItem.link}>
                {menuItem.displayText}
              </Link>
            );
          })}
        </div>
        <div className="menu-divider-horizontal"></div>
        <div className="account-menu">
          <strong>Your Account</strong>
          {ListAccountMenuItems.accountMenu.map((menuItem) => {
            return (
              <Link key={menuItem.displayText} to={menuItem.link}>
                {menuItem.displayText}
              </Link>
            );
          })}
        </div>
      </div>
    </ListAccountMenuContainer>
  );
};
