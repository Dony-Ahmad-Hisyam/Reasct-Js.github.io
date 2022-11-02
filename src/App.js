import React from "react";
import "./index.css";
import Awal from "./components/awalan";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tugas from "./components/tugas2";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Awal />} />
        <Route path="/Tugas" element={<Tugas />} />
      </Routes>
    </BrowserRouter>
  );
}
