import {createSelector} from 'reselect';


const selectCart =state=> state.cart; //which is name in root reducer

export const selectCartItems = createSelector([selectCart],
    (cart)=>cart.cartItems);

export const selectCartItemsCount = createSelector([selectCartItems],
    cartItems=>cartItems.reduce((accumlator,cartItem)=>accumlator+cartItem.quantity,0)
    );

export const selectCartHidden = createSelector([selectCart],cart=>cart.hidden)

export const selectTotalPrice = createSelector([selectCartItems],
    cartItems=>cartItems.reduce((accumlator,cartItem)=>accumlator+cartItem.price*cartItem.quantity,0)
    );