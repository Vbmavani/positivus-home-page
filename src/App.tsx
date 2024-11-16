import { useState } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PricingPage } from "./pages/Pricing";
import "./assets/css/styles.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route
            path="/dashboard"
            element={
              <div>
                DAshboard <Outlet />{" "}
              </div>
            }
          >
            <Route path="analytics" element={<div>hellow orlsd</div>} />
            <Route path="settings" element={<div> ddd009</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
