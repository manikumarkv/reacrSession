import React from "react";

import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import AboutMe from "./AboutMe";
import ContactUs from "./ContactUs";
import Home from "./Home";
import Users from "./Users";
import NotFound from "./notFound";
import User from "./User";


class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li> <Link to="/">Home</Link> </li>
                        <li> <Link to="/aboutme">aboutme</Link> </li>
                        <li> <Link to="/contact">contact</Link> </li>
                        <li> <Link to="/users">users</Link> </li>
                        <li> <a href="/users">users</a> </li>
                    </ul>
                    <Switch>
                        <Route path="/aboutme" component={AboutMe} />
                        <Route path="/contact" component={ContactUs} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/users" component={Users} />
                        <Route exact path="/users/:qwqw/:url" component={User} />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default Routing;
