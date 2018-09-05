import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
ReactDOM.render(
  <Provider store={store}>
    <div className="ui container">
      <div className="ui three item menu">
        <a href="#" className="item">Home</a>
        <a href="#" className="item">Movies</a>
        <a href="#" className="item">Add New Movie</a>
      </div>
      <App /></div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
