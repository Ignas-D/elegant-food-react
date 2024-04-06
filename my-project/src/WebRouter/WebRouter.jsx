import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import MainPage from "../MainPage/MainPage";
import Gallery from "../Gallery/Gallery";

const WebRouter = () => {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default WebRouter;
