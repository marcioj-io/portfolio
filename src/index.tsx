import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< Updated upstream
=======
import { LanguageProvider } from './context/LanguageContext';
import './i18n';
import 'typeface-inter';
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

