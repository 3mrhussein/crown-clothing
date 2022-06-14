import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartDropDownItem from '../cart-dropdown-item/cart-dropdown-item.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartHidden, selectCartItems } from '../../redux/cart/cart.selector';
import { withRouter } from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
const CartDropdown = ({cartItems,history,dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {cartItems.length ? cartItems.map(item=>
                    <CartDropDownItem key={item.id} item={item}/>)
                    :
                    <span className='empty-message'>Your cart is empty</span>
                    }
            
        </div>
        <CustomButton onClick={()=>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
   cartItems : selectCartItems,
   hidden:selectCartHidden
})

export default withRouter(connect(mapStateToProps)(CartDropdown));