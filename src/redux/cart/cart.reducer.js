import CartActionTypes from "./cart.types";
import { addItemToCart , clearItem, removeItem } from "./cart.utils";
const INITIAL_STATE = {
    hidden:true,
    cartItems:[],
};

const cartReducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden:!state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM:
            return{
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
                
            }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:clearItem(state.cartItems,action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM:
            return{
                ...state,
                cartItems:removeItem(state.cartItems,action.payload)
            }
        case CartActionTypes.CLEAR_CART:
            return{
                ...state,
                cartItems:[]
            }
        default :
            return state;
    }
}

export default cartReducer;