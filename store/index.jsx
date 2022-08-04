import {createStore, combineReducers} from 'redux';

import ProductReducer from './reducers/product.reducer';


const RootReducer = combineReducers({
    products : ProductReducer
});

export default createStore(RootReducer);