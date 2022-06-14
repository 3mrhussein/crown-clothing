import React from 'react';
import './checkout-cart-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItemFromCart ,addCartItem} from '../../redux/cart/cart.actions';

const CheckoutCartItem = ({item,clearItem,removeItem,addItem}) => (

    <div className='checkout-item'>
        <div className='image-container'>
            <img className='item-image' alt='hello' src={item.imageUrl} />
        </div>
        <span className='name'>{item.name}</span>
        <div className='quantity' >
            <span className='decrease' onClick={()=>removeItem(item)} style={{cursor:'pointer'}}>&#10094; </span>
            <span>{item.quantity}</span>
            <span className='increase'onClick={()=>addItem(item)} style={{cursor:'pointer'}}>&#10095;</span>
        </div>
        <span className='price'>${item.price * item.quantity}</span>
        <div className='remove-button' onClick={()=>clearItem(item)}>&#10005;</div>

    </div>
)

const mapDispatchToProps = dispatch => (
        {
            clearItem:item=>dispatch(clearItemFromCart(item)),
            removeItem:item=>dispatch(removeItemFromCart(item)),
            addItem:item=>dispatch(addCartItem(item))
        }   
)

export default connect(null,mapDispatchToProps)(CheckoutCartItem);