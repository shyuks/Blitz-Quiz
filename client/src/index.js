import React from 'react';
import ReactDOM from 'react-dom';
// import axios from 'axios';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';

import App from './App';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

// axios.defaults.baseURL = 'http://127.0.0.1:9000';

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('root')
);
