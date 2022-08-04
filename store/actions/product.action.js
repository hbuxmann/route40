export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const FILTERED_PRODUCT = 'FILTERED_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_PRODUCT = 'ADD_PRODUCT';


export const selectProduct = (id) => ({
    type: SELECT_PRODUCT,
    productId: id

})

export const filteredProduct = (id) => ({
    type: FILTERED_PRODUCT,
    productId: id

})

export const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    productId: id

})

export const addProduct = (prd) => ({
    type: ADD_PRODUCT,
    product: prd

})