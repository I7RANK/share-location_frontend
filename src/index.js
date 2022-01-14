import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header/header';
import HomeFooterDesing from './HomeFooterDesing/homeFooterDesing';
import HomeCenterButtonDesign from './HomeCenterButtonDesign/homeCenterButtonDesign';
import reportWebVitals from './reportWebVitals';
import Test from './routes/test';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { io } from "socket.io-client";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Header /><HomeCenterButtonDesign /><HomeFooterDesing /></>} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const socket = io("http://localhost:3001");

socket.on("connect", () => {
  console.log("I'm connected");
  console.log(socket.id);
});
