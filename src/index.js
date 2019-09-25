import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";

import { Provider } from "react-redux";

import store from "./redux";
import { fetchAllAuthors, fetchAllBooks } from "./redux/actions/";

store.dispatch(fetchAllAuthors());
store.dispatch(fetchAllBooks());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
