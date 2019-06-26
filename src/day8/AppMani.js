import React from 'react';
import axios from 'axios';

class AppMani extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentWillMount() {
        axios.get("https://lz1y3ef4p0.execute-api.ap-south-1.amazonaws.com/prod/products")
            .then(respose => {
                this.setState({
                    products: respose.data
                })
            })

    }

    createProductHtml(product) {
        return (<div>
            <div>Product name is {product.name}</div>
            <div>Product price is {product.price}</div>
        </div>)
    }

    render() {
        return this.state.products.map(product => {
            return (<div>
                <div>Product name is {product.name}</div>
                <div>Product price is {product.price}</div>
            </div>)
        })
    }
}

export default AppMani