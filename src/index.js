import React from 'react';
import { ToastContainer } from 'react-toastify';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './styles.css'; // Import the CSS file

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <App />
    <ToastContainer />
  </React.StrictMode>,
  document.getElementById('root'),
);
