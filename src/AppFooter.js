import React from 'react';


class AppFooter extends React.Component {

    render() {
        return (
            <div>
                App AppFooter
                footer message is :
                {this.props.message}
                <div> user name is : {this.props.username}</div>
            </div>
        )

    }
}

export default AppFooter;
