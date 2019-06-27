import React from 'react';
import axios from 'axios';
import "./home.css"
import Component1 from './Component1';
import Component2 from './Component2';

class AppMainComponent extends React.Component {
    constructor(props) {
        super(props)
        this.getDatafromChild = this.getDatafromChild.bind(this)
        this.state = {
            parentData: 's',
        }

    }

    getDatafromChild(val) {

        this.setState({
            parentData: val
        })

    }

    render() {
        return (
            <div>

                <div className={'homeContainer'}>
                    <h2> Home component</h2>
                    <div>
                        <Component1
                            data={this.state.parentData}
                            getDatafromChild={this.getDatafromChild}></Component1>
                        <Component2                            
                            data={this.state.parentData}
                            getDatafromChild={this.getDatafromChild}
                        ></Component2>
                    </div>
                </div>

            </div>)
    }
}

export default AppMainComponent