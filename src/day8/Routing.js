import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AppHome from "./Home";
import AppLayout from "./Layout";
import AppAbout from "./About";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Route path="/aboutme" render={()=> {                    
                    return <AppLayout>
                        <AppAbout></AppAbout>
                    </AppLayout>
                }} />
                <Route path="/home" render={()=> {
                    return <AppLayout>
                        <AppHome></AppHome>
                    </AppLayout>
                }} />
                <Route exact path="/" component={AppHome} />
                {/* <Route exact component={AppLayout} ></Route> */}

            </Router>
        );
    }
}

export default Routing;
