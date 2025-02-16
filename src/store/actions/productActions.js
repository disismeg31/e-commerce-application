export const setProductList = (products) => ({
    type:'SET_PRODUCT_LIST',
    payload:products
})

export const removeProduct = (id) => ({
    type:'REMOVE_PRODUCT',
    payload:id
})