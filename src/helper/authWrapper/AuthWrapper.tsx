import React from "react";
import { useAppSelector } from "store/useStoreHooks";

const AuthWrapper: React.FC = ({ children }) => {
  const { isUserSignedIn } = useAppSelector((state) => state.authenticate);
  return <>{isUserSignedIn && children}</>;
};

export default AuthWrapper;
