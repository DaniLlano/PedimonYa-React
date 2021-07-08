export const addItemToCart = (cartItems, itemToAdd) => {
    const duplicateItem = cartItems.find(
        (cartItem) => cartItem.id === itemToAdd.id
    );

    if (duplicateItem) {
        return cartItems.map((cartItem) => {
            return cartItem.id === itemToAdd.id ?
            {...cartItem,
            quantity: cartItem.quantity + 1 } 
            : cartItem;
        });
    }

    return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const removeItemToCart = (cartItems, itemToRemove) => {
    const duplicateItem = cartItems.find((cartItem) => 
        cartItem.id === itemToRemove.id
    );

    if (duplicateItem.quantity === 1) {
        return cartItems.filter((cartItem) =>
        cartItem.id !== itemToRemove.id)
    }

    return cartItems.map((cartItem) => {
        return cartItem.id === itemToRemove.id ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem;
    });
};