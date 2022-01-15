import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/home';
import HomeFooterDesing from './pages/Home/HomeFooterDesing/homeFooterDesing';
import HomeCenterButtonDesign from './pages/Home/HomeCenterButtonDesign/homeCenterButtonDesign';
import reportWebVitals from './reportWebVitals';
import Test from './pages/test';

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/' element={
            <>
              <HomeCenterButtonDesign />
              <HomeFooterDesing />
            </>
          } />
          <Route path='/test' element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
