import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import App from './App';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

axios.defaults.baseURL = 'http://127.0.0.1:9000';

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);
