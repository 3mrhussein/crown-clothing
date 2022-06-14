import CartActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addCartItem = item => ({
    type: CartActionTypes.ADD_CART_ITEM,
    payload: item
})
//to clear whatever quantity of specific item inside the cart
export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})


//to only reduce quantity of one of specific item insde the cart
export const removeItemFromCart = (item) => ({
    type: CartActionTypes.REMOVE_CART_ITEM,
    payload: item
})

export const clearCart = () => ({
    type: CartActionTypes.CLEAR_CART
})