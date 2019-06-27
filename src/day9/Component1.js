import React from 'react';


class Component1 extends React.Component {
    constructor(props) {
        super(props)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.state = {
            name: props.data
        }


    }

    handleOnChange(e) {

        this.setState({
            name: e.target.value
        })
        this.props.getDatafromChild(e.target.value)
    }

    componentWillReceiveProps(newData){
        this.setState({
            name: newData.data
        })
    }

    render() {
        return <div className={'component1'}>
            component 1 text box value is: {this.state.name}

            <input onChange={this.handleOnChange} value={this.state.name}></input>
        </div >
    }
}

export default Component1