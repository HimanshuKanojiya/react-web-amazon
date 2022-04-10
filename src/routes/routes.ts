import React from "react";

const home = React.lazy(() => import("../pages/Home"));

const login = React.lazy(() => import("../pages/Login"));

const routes: Routes = [
  {
    namePattern: "homePage",
    path: "/",
    pageComponent: home,
    isProtectedPage: true,
  },
  {
    namePattern: "loginPage",
    path: "login",
    pageComponent: login,
    isProtectedPage: true,
  },
];

export default routes;
