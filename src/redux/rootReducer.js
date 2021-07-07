import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import productsReducer from './products/productsReducer'
import cartReducer from './cart/cartReducer'

const persistConfig = {
    key: "root",
    storage: storage,
    whitelist: ["cart"]
}

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)