import React from 'react';
import axios from 'axios';

class AppLayout extends React.Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        return(<div>
            <header>App Header</header>
            <div>{this.props.children}</div>
            <footer>this is my footer</footer>
        </div>)
    }
}

export default AppLayout