import React from "react";


class User extends React.Component {

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
        const UserDetails =this.props.children 
        let params = new URLSearchParams(this.props.location.search);

        const x = params.get('searchStr')
        console.log(UserDetails)
        return (
            <div>
                User name is : {this.props.name}
                <button onClick={this.props.clickme}>onclick</button>
               {/* <UserDetails></UserDetails> */}
               {this.props.children}
            </div>
        );
    }
}

export default User;
