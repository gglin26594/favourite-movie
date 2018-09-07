import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import MoviePage from "./components/MoviePage";
import thunk from 'redux-thunk';
import MovieForm from "./components/MovieForm";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware( thunk, logger)) //logger has to be the last param
);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="ui container">
        <h2>My Favourite Movies</h2>
        <div className="ui three item menu">
          <NavLink exact activeClassName="active" className="item" to="/">
            Home
          </NavLink>
          <NavLink exact activeClassName="active" className="item" to="/movies">
            Movies
          </NavLink>
          <NavLink exact activeClassName="active" className="item" to="/movies/new">
            Add New Movie
          </NavLink>
        </div>
        <Route exact path="/" component={App} />
        <Route exact path="/movies" component={MoviePage} />
        <Route exact path="/movies/new" component={MovieForm} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
