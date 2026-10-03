
import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { CookiesProvider } from "react-cookie";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

import Home from "./components/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <Routes>

          <Route
            path="/dashboard/*"
            element={<Home />}
          />

          <Route
            path="/"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="*"
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);