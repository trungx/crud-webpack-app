import React, { Component } from 'react'

class Product extends Component {

    onDeleteProduct = () => {
        const {id} = this.props;
        let isAgree = window.confirm('Really want to delete ?');
        if(isAgree){
            this.props.onDeleteProduct(id);
        }else{
            // do nothing
        }
        
    }
    render() {
        const { stt, name, category, quantity} = this.props;
        return (
            <tr >
                <th scope="row">{stt}</th>
                <td>{name}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>
                    <button type="button" className="btn btn-success mr-1">Edit</button>
                    <button type="button" className="btn btn-danger" onClick={this.onDeleteProduct}>Delete</button>

                </td>
            </tr>
        )
    }
}

export default Product;