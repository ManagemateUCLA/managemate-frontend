import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from './pages/about';
import Home from './pages/home';
import Transaction from './pages/transaction';
import Schedule from './pages/schedule';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transaction/>} />
          <Route path="/schedule" element={<Schedule/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;