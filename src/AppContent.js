import React from 'react';
import AppNavBar from './AppNavBar';


class AppContent extends React.Component {

    givemeAlert(message) {
        alert(message)
    }

    render() {

        return (
            <div>
                App Content
                <AppNavBar myfunc= {this.givemeAlert} ></AppNavBar>
            </div>
        )

    }
}

export default AppContent;
