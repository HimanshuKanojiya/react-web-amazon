import React from "react";
import { HeaderMenu } from "components/core/Menus/HeaderMenu";
import Defaultlayout from "components/styles/DefaultLayout";

export const DefaultAmazonLayout: React.FC = ({ children }) => {
  const isCurrentPageSignInUp = (): boolean => {
    return (
      window.location.pathname.includes("login") ||
      window.location.pathname.includes("sign-up")
    );
  };

  return (
    <Defaultlayout>
      {!isCurrentPageSignInUp() && <HeaderMenu />}
      <div className="after-header-body">{children}</div>
    </Defaultlayout>
  );
};
