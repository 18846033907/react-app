import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '@store/store';
import './index.less';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
