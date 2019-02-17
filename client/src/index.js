import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// var ES6Promise = require("es6-promise");
// ES6Promise.polyfill();
// var axios = require("axios");


ReactDOM.render(<App />, document.getElementById('root')); //this fetches the root div in index.html
//also it calls app.js

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
