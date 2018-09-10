import { call, all, fork, put } from 'redux-saga/effects';
import { watchFetchProducts, watchAddProduct,watchDeleteProduct } from './productSaga'
export default function* rootSaga() {
    yield [
        fork(watchFetchProducts),
        fork(watchAddProduct),
        fork(watchDeleteProduct)
    ]

}