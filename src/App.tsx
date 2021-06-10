import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux-store/actions/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingDots } from "./components/loading/loading-dots";
import style from "./commons/styles/app.module.scss";
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
  const [loading, setLoading] = useState(true);
  const getAllUsers = async () => {
    await dispatch(setUsers());
    setLoading(false);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  if (loading) {
    return <LoadingDots />;
  }
  return (
    <Router>
      <div className={style.mainContainer}>
        <Switch>
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
