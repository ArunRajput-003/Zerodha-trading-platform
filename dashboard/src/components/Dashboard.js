import React from "react";
import { Routes, Route } from "react-router-dom";

import { GeneralContextProvider } from "./GeneralContext";

import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import Apps from "./Apps";

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <div className="dashboard-container">

        {/* Left/watchlist section */}
        <WatchList />

        {/* Main content */}
        <div className="content">
          <Routes>
            {/* /dashboard */}
            <Route index element={<Summary />} />

            {/* /dashboard/orders */}
            <Route
              path="orders"
              element={<Orders />}
            />

            {/* /dashboard/holdings */}
            <Route
              path="holdings"
              element={<Holdings />}
            />

            {/* /dashboard/positions */}
            <Route
              path="positions"
              element={<Positions />}
            />

            {/* /dashboard/funds */}
            <Route
              path="funds"
              element={<Funds />}
            />

            {/* /dashboard/apps */}
            <Route
              path="apps"
              element={<Apps />}
            />
          </Routes>
        </div>

      </div>
    </GeneralContextProvider>
  );
};

export default Dashboard;