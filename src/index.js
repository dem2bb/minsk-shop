import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter } from 'react-router-dom';
import { createDispatchHook, Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
