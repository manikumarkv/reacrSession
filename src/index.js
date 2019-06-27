import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import * as serviceWorker from './serviceWorker';
// import App from './day7/App';
// import Routing from './day8/Routing';
// import AppMani from './day8/AppMani';
import AppMainComponent from './day9/MainComponent';

ReactDOM.render(<AppMainComponent/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
