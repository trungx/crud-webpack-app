import * as Types from './ActionType'

export const fetchProductRequest = () => {
    return {
        type: Types.FETCH_PRODUCT_REQUEST
    }
}

export const fetchProductSuccess = (productList) => {
    return {
        type : Types.FETCH_PRODUCT_SUCCESS,
        productList : productList
    }
}

export const fetchProductError = (error) => {
    return {
        type: Types.FETCH_PRODUCT_ERROR,
        error : error
    }
}

export const addProductRequest = (product) => {
    return {
        type: Types.ADD_PRODUCT_REQUEST,
        product : product
    }
}

export const addProductSuccess = (message) => {
    return {
        type : Types.ADD_PRODUCT_SUCCESS,
        message : message
    }
}

export const addProductError  = (error) => {
    return {
        type : Types.ADD_PRODUCT_ERROR,
        error : error
    }
}

export const deleteProductRequest = (productId) => {
    return {
        type : Types.DELETE_PRODUCT_REQUEST,
        productId : productId 
    }
}