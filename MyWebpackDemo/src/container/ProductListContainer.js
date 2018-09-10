import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductList from './../components/ProductList';
import { fetchProductRequest, deleteProductRequest } from './../action/index'
class ProductListContainer extends Component {

    componentDidMount = () => {
        this.props.onFetchProductReq();
    }

    render() {
        const { productList, onDeleteProductReq } = this.props;

        return (
            <ProductList productList={productList} onDeleteProductReq={onDeleteProductReq} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.product
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onFetchProductReq: () => {
            dispatch(fetchProductRequest());
        },
        onDeleteProductReq: (productId) => {
            dispatch(deleteProductRequest(productId));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductListContainer);