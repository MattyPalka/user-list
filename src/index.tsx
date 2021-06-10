import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-snapshot";
import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import userReducer from "./redux-store/reducers/user";

// probably redux is an overkill for this size of the app, but if this is to be extended in the future
// having a global store can be really useful

const rootReducer = combineReducers({
  users: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

// using react snapshot for render to generate static pages snapshot for faster content display
render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
