import React from 'react';


class Component2 extends React.Component {
    constructor(props) {
        super(props)
        // this.handleOnChange = this.handleOnChange.bind(this)
        
        this.state={
            name: this.props.data
        }

    }
    handleOnChange(e) {

        this.setState({
            name: e.target.value
        });

        this.props.getDatafromChild(e.target.value);
    }
    componentWillReceiveProps(newProps){
        this.setState({
            name: newProps.data
        })
    }

    render() {
        return (
            <div className={'component2'}>
                Component 2
            <div>Parent Info is : {this.props.data}</div>
                <input
                    onChange={this.handleOnChange.bind(this)}
                    value={this.state.name}
                ></input>
            </div>)
    }
}

export default Component2