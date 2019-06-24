import React from "react";


class UserForm extends React.Component {

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
                <form>
                    <input type="text"></input> 
                    <input type="text"></input> 
                    <input type="text"></input>
                     <input type="text"></input>
                      <input type="text"></input>
                </form>
            </div>
        );
    }
}

export default UserForm;
