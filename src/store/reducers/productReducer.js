const initialState = {
    products:[],
    cart:false,
    placeorder:false,
    favorite:[],
}


// const productReducer =(state={products:[]},action) => {
const productReducer =(state=initialState,action) => {

switch(action.type){
    case 'SET_PRODUCT_LIST':
        return{
            ...state,
            products:action.payload
        };
    
     
    default:
      return state; 

}
}

export {productReducer}