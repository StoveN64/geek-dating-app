import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter} from "react-router-dom";
import { createBrowserHistory } from "history";
import store from "./ducks/store";
const Router = process.env.NODE_ENV === 'development' ? HashRouter : BrowserRouter
const customHistory = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <HashRouter history={customHistory}>
          <App />
        </HashRouter>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();