import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './day5/App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import AboutUs from './day5/Aboutus';
import Profile from './day5/Profile';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/users" component={AboutUs} />
        <Route path="/contact" component={Profile} />
      </div>
    </Router>
  )

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
