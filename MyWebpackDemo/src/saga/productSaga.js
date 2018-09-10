import * as Types from './../action/ActionType';
import { takeEvery, put, call } from 'redux-saga/effects';

import { getProducts, addProductApi, deleteProductApi } from './Api'
import { deleteProductRequest } from '../action';

function* fetchProducts() {
    try {
        const data = yield call(getProducts);
        yield put({
            type: Types.FETCH_PRODUCT_SUCCESS,
            productList: data
        })
    } catch (err) {
        yield put({
            type: Types.FETCH_PRODUCT_ERROR,
            error: err
        })

    }
}

function* addProduct(action) {
    try {
        const result = yield addProductApi(action.product);
        if (result) {
            yield put({
                type: Types.FETCH_PRODUCT_REQUEST,
            })
        }
    } catch (err) {
        yield put({
            type: Types.ADD_PRODUCT_ERROR,
            error: err
        });
    }
}

function* deleteProduct(action) {
    try {
        const result = yield deleteProductApi(action.productId);
        if (result) {
            yield put({
                type: Types.FETCH_PRODUCT_REQUEST,
            })
        }
    } catch (err) {
        console.log(err);

    }


}

export function* watchFetchProducts() {
    yield takeEvery(Types.FETCH_PRODUCT_REQUEST, fetchProducts);
}

export function* watchAddProduct() {
    yield takeEvery(Types.ADD_PRODUCT_REQUEST, addProduct);
}

export function* watchDeleteProduct() {
    yield takeEvery(Types.DELETE_PRODUCT_REQUEST, deleteProduct);
}