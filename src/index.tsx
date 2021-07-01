import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, Store } from "redux"
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import App from './App';
import reducer from "./Store/reducer";
import reportWebVitals from './reportWebVitals';

const store: Store<CarState, CarAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
