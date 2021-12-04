import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import AppRedux from './components/AppRedux';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
  </BrowserRouter>,
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppRedux />} />
      </Routes>
  </BrowserRouter>,
  </Provider>,
  document.getElementById('root-redux')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
