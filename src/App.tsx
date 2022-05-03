import React, { useEffect } from "react";
import "./App.css";
import routes from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageAuthWrapper from "helper/authWrapper/PageAuthWrapper";
import { DefaultAmazonLayout } from "components/core/DefaultAmazonLayout";
import { useAppSelector, useAppDispatch } from "store/useStoreHooks";
import { doLogin } from "store/slices/authenticate/Authenticate";
import { useFirebaseAuthGetUseCase } from "service/useCases/authenticateUseCases/useFirebaseAuthGetUseCase";

function App() {
  const authenticate = useAppSelector((state) => state.authenticate);
  const auth = useFirebaseAuthGetUseCase();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!authenticate.isUserSignedIn) {
      return;
    }

    auth.then((e) => {
      e.onAuthStateChanged((currentUser) => {
        if (currentUser) {
          dispatch(doLogin());
          return;
        }
      });
    });
  }, [authenticate, auth, dispatch]);

  return (
    <DefaultAmazonLayout>
      <Router>
        <Routes>
          {routes.map((route) => {
            const {
              namePattern,
              path,
              pageComponent: Page,
              isProtectedPage,
            } = route;
            return (
              <Route
                key={namePattern}
                path={path}
                element={
                  <React.Suspense fallback={<>Loading...</>}>
                    {isProtectedPage ? (
                      <PageAuthWrapper>
                        <Page />
                      </PageAuthWrapper>
                    ) : (
                      <Page />
                    )}
                  </React.Suspense>
                }
              />
            );
          })}
          <Route
            path="*"
            element={<p>Must be lost...anyways this project is in WIP...</p>}
          />
        </Routes>
      </Router>
    </DefaultAmazonLayout>
  );
}

export default App;
