import React from 'react';


class AppNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.hndleTextInput = this.hndleTextInput.bind(this)
       
        //this.hndleTextInput = this.hndleTextInput.bind(this)
        this.message = 'my messagw'
        this.state = {
            firstName: 'mani',
            address: 'dffd'
        }
    }

    hndleTextInput(x) {
        const currentValue = x.target.value
        console.log(currentValue)
        this.setState({
            firstName: currentValue
        })
    }

    onClickevent() {
        alert('click event')
        this.message = 'my new message'
        // this.state.firstName = "sdfdf"
        this.setState({
            firstName: 'mani updated'
        })

        // this.props.myfunc('message from reacy')
    }


    render() {
        // console.log('render executed')
        return (
            <div >
                <ul>
                    <li>Item1</li>
                    <li>Item1</li>
                    <li>Item1</li>
                    <li>{this.message}</li>
                    <li>{this.state.firstName}</li>
                    <input onChange={this.ccccc} value={this.state.firstName}></input>

                </ul>
            </div>
        )

    }


}

export default AppNavBar;
