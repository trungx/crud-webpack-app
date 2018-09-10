import React, { Component } from 'react'
import Product from './Product'


class ProductList extends Component {

    onDeleteProduct = (id) => {
        console.log(id);
        
        this.props.onDeleteProductReq(id);
        
    }
    onShowProduct = (productList) => {
        let result = null;
        result = productList.map((product, index) => {
            return(<Product 
                key={index} 
                id={product.id} 
                stt={index+1} 
                name={product.name} 
                category={product.category} 
                quantity={product.quantity}
                onDeleteProduct={ this.onDeleteProduct}
                />);
        })
        return result;
    }
    render() {
        const {productList} = this.props;
        return (
            <table className="col-md-8 table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {this.onShowProduct(productList)}
                </tbody>
            </table>
        )
    }
}

export default ProductList;