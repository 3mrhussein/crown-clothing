import React from 'react';
import './checkout-cart-item.styles.scss';
import { connect } from 'react-redux';
import { clearItemFromCart, removeItemFromCart, addCartItem } from '../../redux/cart/cart.actions';
import { CheckoutTableItemContainer } from './checkout-cart-item.styles';
import { CheckoutPageTableRow } from '../../pages/checkout/checkout.styles';

const CheckoutCartItem = ({ item, clearItem, removeItem, addItem }) => (
  <CheckoutPageTableRow>
    <CheckoutTableItemContainer>
      <img alt="hello" src={item.imageUrl} />
    </CheckoutTableItemContainer>
    <CheckoutTableItemContainer>
      <span>{item.name}</span>
    </CheckoutTableItemContainer>
    <CheckoutTableItemContainer>
      <div className="quantity">
        <span onClick={() => removeItem(item)} style={{ cursor: 'pointer' }}>
          &#10094;
        </span>
        <span> {item.quantity} </span>
        <span onClick={() => addItem(item)} style={{ cursor: 'pointer' }}>
          &#10095;
        </span>
      </div>
    </CheckoutTableItemContainer>
    <CheckoutTableItemContainer>
      <span>${item.price * item.quantity}</span>
    </CheckoutTableItemContainer>
    <CheckoutTableItemContainer>
      <span onClick={() => clearItem(item)}>&#10005;</span>
    </CheckoutTableItemContainer>
  </CheckoutPageTableRow>
);

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutCartItem);
