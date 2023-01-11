import React from 'react';
import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import MainPage from './components/MainPage';
import Results from './components/Results';
import DetailPage from './components/DetailPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/" component={MainPage} exact /> 
    <Route path="/Results" component={Results} exact />
    <Route path="/DetailPage" component={DetailPage} exact />
  </Routes>
  </BrowserRouter>
);
