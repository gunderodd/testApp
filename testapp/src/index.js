import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom' //my addition to source code
import { BrowserRouter } from 'react-router-dom' //my second import based on tutorial
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root')); // the original code


render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.querySelector('#root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
