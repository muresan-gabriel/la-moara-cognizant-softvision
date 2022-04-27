import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import FirstHomework from "./pages/FirstHomework";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<HomePage />} exact />
            <Route path="/first-homework" element={<FirstHomework />} exact />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
