import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles  } from './global-styles';
import App from './App';
import './index.css';
// auth
import {Provider} from 'react-redux'
import store from './auth/store'



ReactDOM.render(
    <Provider store={store}>
      <GlobalStyles/>
      <App />
    </Provider>,
  document.getElementById('root')
);
