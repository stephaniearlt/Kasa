import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Permet d'injecter tout le contenu présent dans "App.jsx" dans "index.html"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
