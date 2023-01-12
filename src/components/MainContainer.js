import React from 'react';
import { Routes, Route } from "react-router-dom";
import HeaderBar from "./HeaderBar";
import MainPage from "./MainPage";
import Results from "./Results";
import DetailPage from "./DetailPage";

function MainContainer() {
  return (
      <div>
        <HeaderBar />
        <Routes>
          <Route path="/" element={<MainPage />} /> 
          <Route path="Results" element={<Results />} /> 
          <Route path="DetailPage/:id" element={<DetailPage />} />
        </Routes>
      </div>
  );
}

export default MainContainer;
