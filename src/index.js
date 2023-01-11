import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MainPage from './components/MainPage';
import Results from './components/Results';
import DetailPage from './components/DetailPage';
import HeaderBar from './components/HeaderBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" element={<HeaderBar />} />
    <Route path="/" element={<MainPage />} /> 
    <Route path="/Results" element={<Results />} />
    <Route path="/DetailPage/:id" element={<DetailPage />} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
