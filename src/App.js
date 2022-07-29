import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import TestPage from "./pages/testPage/TestPage";
import "./styles/global.scss"

function App() {

  return (
    <div className="app">
      <BrowserRouter >
        <Routes>
          <Route path="/accueil" element={<HomePage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/test" element={<TestPage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
