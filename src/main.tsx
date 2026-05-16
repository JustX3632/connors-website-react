import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Force dark mode as default per contract requirement
document.documentElement.classList.add('dark');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
