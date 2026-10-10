import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ai.css';
import App from './App';
import { DesignProvider } from './DesignContext';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DesignProvider>
      <App />
    </DesignProvider>
  </React.StrictMode>
);

reportWebVitals();
