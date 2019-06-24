import React from "react";


class UserDetails extends React.Component {

    constructor(props) {
        super(props)
        console.log('constructor')
        this.data = []
        this.x = 12
    }

    componentWillMount() {
        console.log('before render')
        //  this.data = getUsers()
        // const d =this.props.match.params.qwqw
    }

    render() {
        console.log('render')
        //const s = this.props.match
        return (
            <div>
               Address is :'something'
               ph no: ''
            </div>
        );
    }
}

export default UserDetails;
