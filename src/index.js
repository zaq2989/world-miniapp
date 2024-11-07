import React from 'react';
import ReactDOM from 'react-dom';
import { MiniKit } from '@worldcoin/minikit-js';
import App from './App';

MiniKit.install();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);