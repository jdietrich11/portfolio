import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './firebase/config';

import App from './pages/app/app';
import AboutMe from './pages/aboutme/aboutme';
import Resume from './pages/resume/resume';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/about' exact element={<AboutMe />} />
      <Route path='/resume' exact element={<Resume />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
