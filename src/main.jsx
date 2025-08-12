import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Import Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ToastContainer position="top-right" autoClose={2000} />
  </>
);


