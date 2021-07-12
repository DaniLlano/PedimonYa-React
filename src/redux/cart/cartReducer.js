import {TOGGLE_CART_HIDDEN, ADD_ITEM, REMOVE_ITEM, CLEAR_CART} from './cartActions'
import {addItemToCart, removeItemFromCart} from './cartUtils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            };
        case REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        case CLEAR_CART:
            return {
                ...state,
                cartItems: []
            }
    
        default:
            return state;
    }
}

export default cartReducer;
