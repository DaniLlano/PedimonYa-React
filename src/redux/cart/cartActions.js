export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_CART = "CLEAR_CART";

export const toggleCartShow = () => ({
    type: TOGGLE_CART_HIDDEN
})

export const addItem = (item) => ({
    type: ADD_ITEM,
    payload: item,
})

export const removeItem = (item) => ({
    type: REMOVE_ITEM,
    payload: item,
})

export const clearCart = () => ({
    type: CLEAR_CART,
})