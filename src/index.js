import React from 'react';
import ReactDOM from 'react-dom/client';
import Anime from './components/Anime';
// import DataFetching from './components/DataFetching';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import { CountryRender } from './components/countries';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Anime />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
