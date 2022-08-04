import {products} from '../../database/products';
import { SELECT_PRODUCT, FILTERED_PRODUCT, REMOVE_PRODUCT, ADD_PRODUCT} from '../actions/product.action';


const initialState = {
    // products: products, 
    products:  products.map(function(obj){
        return(
            {id: obj.idProduct, value: obj.alt, image: obj.image}
        )
    }),
    filteredProduct: [],
    selected: null 
    // selected: []

}


const ProductReducer = (state = initialState, action) => {
    switch(action.type){
        case SELECT_PRODUCT:
            console.log('SELECTED PRODUCT??')
            const indexProduct = state.products.findIndex(prd => prd.id === action.productId);
            console.log('El indice es...'+indexProduct);
            if (indexProduct === -1) return state;
            console.log('state.products[indexProduct] '+JSON.stringify(state.products[indexProduct]));
            return {...state, selected: state.products[indexProduct]}
        case FILTERED_PRODUCT:
            return { 
                ...state,
                filteredProduct: state.products.filter(prd => prd.id === action.productId)

            }
        case REMOVE_PRODUCT:
            console.log('¿¿¿¿REMOVE PRODUCT????');
            return {
                ...state,
                products: state.products.filter(prd => prd.id !== action.productId)
            }
        case ADD_PRODUCT:
            console.log('ADD PRODUCT?!?!');
            console.log('Product-->'+JSON.stringify(action.product));
            // console.log('Product is array? '+ state.products.isArray());
            return {
                ...state,
                // products: state.products.push({id: action.product.id, value: action.product.value, image: action.product.image})
                products: state.products.concat({id: action.product.id, value: action.product.value, image: action.product.image})

            }    
        default:
            return state;
    }
}


export default ProductReducer;