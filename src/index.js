import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HeaderBar from './components/HeaderBar';
import MainPage from './components/MainPage';
import Results from './components/Results';
import DetailPage from './components/DetailPage';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <HeaderBar />
    <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/Results" element={<Results />} />
    <Route path="/DetailPage/:id" element={<DetailPage />} />
    </Routes>
  </BrowserRouter>
);


