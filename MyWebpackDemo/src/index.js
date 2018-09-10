import "@babel/polyfill";

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import { createStore, applyMiddleware } from 'redux';
import appReducer from './reducer/root';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById("root")
)