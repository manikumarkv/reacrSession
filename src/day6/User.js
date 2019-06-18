import React from "react";


class User extends React.Component {
    
    constructor(props) {
        super(props)
        console.log('constructor')
        this.data= []
        this.x = 12
    }
    
    componentWillMount(){
        console.log('before render')
        //  this.data = getUsers()
        const d =this.props.match.params.qwqw
    }

    render() {
        console.log('render')
        const s = this.props.match
        return (
            <div>
                User Information {s.params.qwqw} un delared var:  {this.mau}
            </div>
        );
    }
}

export default User;
