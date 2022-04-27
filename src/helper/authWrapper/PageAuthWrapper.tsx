import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import { doLogin } from "store/slices/authenticate/Authenticate";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";

const PageAuthWrapper: React.FC = ({ children }) => {
  const history = useNavigate();
  const auth = useFirebaseAuthGetUseCase();
  const { isUserSignedIn } = useAppSelector((state) => state.authenticate);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.then((e) => {
      e.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          dispatch(doLogin());
          history("/");
          return;
        }
      });
    });
  }, [isUserSignedIn, auth, dispatch, history]);

  return <>{children}</>;
};

export default PageAuthWrapper;
