import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './components/app/app';
import AboutMe from './components/aboutme/aboutme';

const rootElement = document.querySelector('#root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<App />} />
      <Route path='/about' exact element={<AboutMe />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
