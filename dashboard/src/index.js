// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import { CookiesProvider } from "react-cookie";

// import "./index.css";
// import "react-toastify/dist/ReactToastify.css";

// import Home from "./components/Home";

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <CookiesProvider>
//       <BrowserRouter>
//         <Routes>
//           {/* Main dashboard */}
//           <Route path="/dashboard/*" element={<Home />} />

//           {/* Redirect localhost:3000 → localhost:3000/dashboard */}
//           <Route
//             path="/"
//             element={<Navigate to="/dashboard" replace />}
//           />

//           {/* Any unknown URL */}
//           <Route
//             path="*"
//             element={<Navigate to="/dashboard" replace />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </CookiesProvider>
//   </React.StrictMode>
// );

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
            path="/dashboard"
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