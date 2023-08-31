import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { myReducer } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(myReducer, applyMiddleware(thunk));
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

reportWebVitals();