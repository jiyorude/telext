import React from 'react';
import ReactDOM from 'react-dom/client';
import WorldClock from './WorldClock';
import "./css/worldclock.min.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorldClock />
  </React.StrictMode>
);

