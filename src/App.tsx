import React, { Suspense, useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setUsers } from "./redux-store/actions/user";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoadingDots } from "./components/loading/loading-dots";
import style from "./commons/styles/app.module.scss";
import routes from "./config/routes";

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  /**
   * Fetch all users from the API and save it in redux
   * auto retry if fails for any reason
   */
  const getAllUsers = useCallback(async () => {
    try {
      await dispatch(setUsers());
      setLoading(false);
    } catch {
      //error logged in dispatch, try fetching again
      getAllUsers();
    }
  }, [dispatch]);

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

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
