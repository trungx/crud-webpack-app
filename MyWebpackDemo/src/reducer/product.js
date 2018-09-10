import * as Types from './../action/ActionType';


const product = (state = [],action) => {
    switch(action.type){
        case Types.FETCH_PRODUCT_SUCCESS:
       state = action.productList;
       return [...state];
        default:
        return [...state];
    }
}

export default product;