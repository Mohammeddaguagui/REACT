import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import reducer from "./crudreduxnadi/Reducer"
import reducer from "./searchRedux/store"
import { Provider } from 'react-redux';
import App from './searchRedux/App';
import reportWebVitals from './reportWebVitals';
import {  legacy_createStore as createStore  } from 'redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer)
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
