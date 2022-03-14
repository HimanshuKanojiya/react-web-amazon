import React from "react";
import "./App.css";
import { amazonStore } from "store/store";
import { Provider } from "react-redux";
import routes from "./routes/routes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "components/styles/GlobalCSS";
import AuthWrapper from "helper/authWrapper/AuthWrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import Defaultlayout from "components/styles/DefaultLayout";

function App() {
  return (
    <Provider store={amazonStore}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <Defaultlayout>
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
                          <AuthWrapper>
                            <Page />
                          </AuthWrapper>
                        ) : (
                          <Page />
                        )}
                      </React.Suspense>
                    }
                  />
                );
              })}
            </Routes>
          </Router>
        </Defaultlayout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
