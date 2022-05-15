import React, { useEffect, useState } from "react";
import { HeaderMenu } from "components/core/Menus/HeaderMenu";
import { SubHeaderMenu } from "./Menus/SubHeaderMenu";
import { FooterMenu } from "./Menus/FooterMenu";
import { useLocation } from "react-router-dom";
import Defaultlayout from "components/styles/DefaultLayout";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import {
  doLogin,
  setCurrentUserData,
} from "store/slices/authenticate/Authenticate";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";

export const DefaultAmazonLayout: React.FC = ({ children }) => {
  const location = useLocation();
  const [isCurrentPageLogin, updateCurrentPage] = useState<boolean>(false);
  const authenticate = useAppSelector((state) => state.authenticate);
  const auth = useFirebaseAuthGetUseCase();
  const dispatch = useAppDispatch();

  const isCurrentPageSignInUp = (pathName: string): void => {
    if (pathName.includes("login") || pathName.includes("sign-up")) {
      updateCurrentPage(true);
      return;
    }
    updateCurrentPage(false);
  };

  useEffect(() => {
    isCurrentPageSignInUp(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (authenticate.isUserSignedIn || authenticate.currentUserData) {
      return;
    }

    auth.then((e) => {
      e.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          dispatch(doLogin());
          dispatch(setCurrentUserData(currentUser));
          return;
        }
      });
    });
  }, [authenticate, auth, dispatch, location.pathname]);

  return (
    <Defaultlayout>
      {!isCurrentPageLogin && (
        <>
          <HeaderMenu />
          <SubHeaderMenu />
        </>
      )}
      <div className="after-header-body">{children}</div>
      {!isCurrentPageLogin && <FooterMenu />}
    </Defaultlayout>
  );
};
