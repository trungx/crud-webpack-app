import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddProduct from './../components/AddProduct';
import {addProductRequest} from './../action/index'
class AddProductContainer extends Component {


    render() {
        const {onAddProduct}= this.props;

        return (
            <AddProduct onAddProduct={onAddProduct}/>
        )
    }
}

const mapDispatchToProps = (dispatch,props) => {
    return {
        onAddProduct : (product) => {
            dispatch(addProductRequest(product));
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProductContainer);