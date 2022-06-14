import React from 'react';
//import CheckoutCartItem from '../../components/checkout-cartitem/checkout-cart-item.component';
import './checkout.styles.scss'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems ,selectTotalPrice} from '../../redux/cart/cart.selector' ;
import CheckoutCartItem from '../../components/checkout-cartitem/checkout-cart-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckoutPage = ({cartItems,total})=>(
    <div className='checkout-page'>
          <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>  
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span >Remove</span>
            </div>
        </div>
        
            {cartItems.map(item=><CheckoutCartItem key={item.id} item={item} />)}
        
         
         <div className='total'><span>TOTAL : ${total}</span></div>
         <StripCheckoutButton price={total}/>
    </div>
)
const mapStateToProps = createStructuredSelector(
 {     cartItems : selectCartItems,
        total : selectTotalPrice
 })

export default connect(mapStateToProps)(CheckoutPage);