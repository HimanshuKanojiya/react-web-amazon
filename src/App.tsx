import React from "react";
import routes from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageAuthWrapper from "helper/authWrapper/PageAuthWrapper";
import { DefaultAmazonLayout } from "components/core/DefaultAmazonLayout";

function App() {
  return (
    <Router>
      <DefaultAmazonLayout>
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
      </DefaultAmazonLayout>
    </Router>
  );
}

export default App;
