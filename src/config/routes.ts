import { lazy } from "react";

// lazyload pages
const Homepage = lazy(() => import("../pages/homepage/homepage"));

// All website routes
const routes = [
  {
    path: "/",
    component: Homepage,
  },
];

export default routes;
