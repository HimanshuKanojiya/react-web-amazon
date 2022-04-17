import React, { useEffect } from "react";
import { useAppSelector } from "store/useStoreHooks";
import { useNavigate } from "react-router-dom";

const AuthWrapper: React.FC = ({ children }) => {
  const { isUserSignedIn } = useAppSelector((state) => state.authenticate);
  const history = useNavigate();

  useEffect(() => {
    if (!isUserSignedIn) {
      history("/login");
    }
  });

  return <>{isUserSignedIn && children}</>;
};

export default AuthWrapper;
