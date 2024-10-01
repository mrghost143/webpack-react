import React from 'react';
import ReactDOM from 'react-dom/client';
import "@shared/scss/style.scss";
import { Provider } from 'react-redux';
import store from '@config/store';
import { App } from './app';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App  />
    </Provider>
  </React.StrictMode>,
);
