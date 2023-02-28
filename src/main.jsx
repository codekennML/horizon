import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter, Route } from "react-router-dom";

const router =  ([
  {
   
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
    <Route  path = "/*" element = { <App /> } />
    </HashRouter>
  </React.StrictMode>
);
