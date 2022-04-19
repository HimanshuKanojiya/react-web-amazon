import React from "react";

const homePage = React.lazy(() => import("../pages/Home"));

const loginPage = React.lazy(() => import("../pages/Login"));

const signUpPage = React.lazy(() => import("../pages/SignUp"));

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
  {
    namePattern: "signUpPage",
    path: "sign-up",
    pageComponent: signUpPage,
    isProtectedPage: false,
  },
];

export default routes;
