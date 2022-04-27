import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
