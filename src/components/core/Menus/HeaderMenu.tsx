import React from "react";
import { AmazonLogo } from "../AmazonLogo";
import { amazonIcons } from "assets/icons";
import { HeaderMenuContainer } from "components/styles/Menus/HeaderMenuContainer";
import { DualTextItem } from "../HeaderMenuItems/DualTextItem";
import { SearchBar } from "../SearchBar/SearchBar";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";
import { ListAccountMenu } from "../Menus/ListAccountMenu";
import { CartItem } from "../HeaderMenuItems/CartItem";
import { useAppSelector } from "store/useStoreHooks";

export const HeaderMenu: React.FC = () => {
  const { LocationIcon, LessOption } = amazonIcons;
  const { currentUserData, isUserSignedIn } = useAppSelector(
    (state) => state.authenticate
  );

  return (
    <HeaderMenuContainer>
      <AmazonLogo />

      <DualTextItem
        withIcon={true}
        iconPosition="left"
        icon={LocationIcon}
        actionCTA={() => console.log("Choose address!")}
        normalText="Hello"
        highlightText="Select your address"
      />

      <SearchBar />
      <LanguageSwitcher />

      <DualTextItem
        withIcon={true}
        iconPosition="right"
        icon={LessOption}
        normalText={`Hello, ${
          //This should be changed after
          //setting profile related data in firebase API
          isUserSignedIn && currentUserData
            ? currentUserData.email.split("@")[0]
            : "Sign in"
        }`}
        highlightText="Account & Lists"
        PopUpComponent={<ListAccountMenu />}
      />

      <DualTextItem
        withIcon={false}
        actionCTA={() => console.log("Choose address!")}
        normalText="Returns"
        highlightText="& Orders"
      />

      <CartItem itemsInCart="0" actionCTA={() => console.log("ITEM CART")} />
    </HeaderMenuContainer>
  );
};
