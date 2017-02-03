import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';
import reducers from './reducers';
import routes from './routes';
import { persistStore, autoRehydrate, storages} from 'redux-persist';
import './index.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

function configureStore() {
  return new Promise((resolve, reject) => {
    try {
      const store = createStore(
        reducers,
        undefined,
        compose(
          autoRehydrate(),
          applyMiddleware(promise),
        ),
      );
      persistStore(store,storages.asyncSessionStorage,() => resolve(store));
    } catch (error) {
      reject(error);
    }
  });
}

configureStore().then(store => {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>, document.getElementById('root'));
}).catch(error=>{console.log(error)});





