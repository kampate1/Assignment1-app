import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { App } from "./App";
import "./index.css";
import { CustomerList } from './CustomerList/CustomerList';
import './index.css';
import reportWebVitals from './reportWebVitals';

// App is the root component of our app.
// React application is formed by a tree of React components. (github copilot)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customers" element={<CustomerList role={"Visitor"} />}/>
        <Route path="/admin" element={<CustomerList role={"Admin"} />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
