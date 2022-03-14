import React from "react";

const home = React.lazy(() => import("../pages/Home"));

const routes: Routes = [
  {
    namePattern: "homePage",
    path: "/",
    pageComponent: home,
    isProtectedPage: true,
  },
];

export default routes;
