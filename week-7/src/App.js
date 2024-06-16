import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Appbar from "./Appbar";
import RecoilDeepDive from "./RecoilDeepDive";
const Dashboard = lazy(() => import("./Dashboard"));
const Landing = lazy(() => import("./Landing"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback="Loading....">
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback="Loading...">
                <Landing />
                {/* <StatemanagementUsage /> */}
                <RecoilDeepDive />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
