import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { amazonStore } from "store/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "theme/theme";
import { GlobalCSS } from "components/styles/GlobalCSS";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={amazonStore}>
      <ThemeProvider theme={theme}>
        <GlobalCSS />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
