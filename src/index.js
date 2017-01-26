import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('container')
)
