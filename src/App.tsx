import React, { lazy, Suspense, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux-store/actions/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingDots } from "./components/loading/loading-dots";

// lazyload pages
const Homepage = lazy(() => import("./pages/homepage/homepage"));

const routes = [
  {
    path: "/",
    component: Homepage,
  },
];

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUsers());
  });
  return (
    <Router>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          render={(routeProps) => (
            <Suspense fallback={<LoadingDots />}>
              <route.component {...routeProps} />
            </Suspense>
          )}
        />
      ))}
    </Router>
  );
}

export default App;
