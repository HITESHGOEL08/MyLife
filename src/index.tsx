
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { googleAnalyticsService } from './services/googleAnalyticsService';
import { Provider } from "react-redux"
import { Routes } from './routes/Routes';
import { configureStore } from './redux/configureStore';

googleAnalyticsService.initGA()

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>

    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
