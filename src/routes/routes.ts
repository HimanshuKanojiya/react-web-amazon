import React from "react";

const homePage = React.lazy(() => import("../pages/Home"));

const loginPage = React.lazy(() => import("../pages/Login"));

const routes: Routes = [
  {
    namePattern: "homePage",
    path: "/",
    pageComponent: homePage,
    isProtectedPage: true,
  },
  {
    namePattern: "loginPage",
    path: "login",
    pageComponent: loginPage,
    isProtectedPage: false,
  },
];

export default routes;
