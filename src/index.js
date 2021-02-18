import React from "react";
import ReactDom from "react-dom";
import GlobalState from "./context/GlobalState";
import App from "./containers/App";
import { BrowserRouter } from "react-router-dom";

ReactDom.render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
