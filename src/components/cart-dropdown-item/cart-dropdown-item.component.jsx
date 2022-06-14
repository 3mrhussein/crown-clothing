import React from 'react';
import './cart-dropdown-item.styles.scss';

const CartDropDownItem = ({item})=>(
    <div className='dropdown-item'>
                
                <img alt='hello' src={item.imageUrl}/>
                <div className='dropdown-item-info'>
                    <span>{item.name}</span>
                    <span>{item.quantity} x ${item.price}</span>
                </div>
    </div>
)


export default CartDropDownItem;