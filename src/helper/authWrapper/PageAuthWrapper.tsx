import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";

const PageAuthWrapper: React.FC = ({ children }) => {
  const history = useNavigate();
  const location = useLocation();
  const auth = useFirebaseAuthGetUseCase();
  const { isUserSignedIn } = useAppSelector((state) => state.authenticate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isUserSignedIn) return;

    auth.then((e) => {
      e.onAuthStateChanged((currentUser) => {
        if (
          currentUser &&
          (location.pathname.includes("login") ||
            location.pathname.includes("sign-up"))
        ) {
          history("/");
          return;
        } else if (currentUser) {
          window.history.back();
        }
      });
    });
  }, [isUserSignedIn, auth, dispatch, history, location.pathname]);

  return <>{children}</>;
};

export default PageAuthWrapper;
