import React from 'react';
//import CheckoutCartItem from '../../components/checkout-cartitem/checkout-cart-item.component';
import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectTotalPrice,
} from '../../redux/cart/cart.selector';
import CheckoutCartItem from '../../components/checkout-cartitem/checkout-cart-item.component';
import StripCheckoutButton from '../../components/stripe-button/stripe-button.component';
import {
  CheckoutPageTable,
  CheckoutPageTableHeadCell,
  CheckoutPageContainer,
  CheckoutPageTableRow,
  CheckoutPageTableBody,
  CheckoutPageTableHead,
} from './checkout.styles.js';
const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutPageTable>
      <CheckoutPageTableHead>
        <CheckoutPageTableRow>
          <CheckoutPageTableHeadCell>Product</CheckoutPageTableHeadCell>
          <CheckoutPageTableHeadCell>Description</CheckoutPageTableHeadCell>
          <CheckoutPageTableHeadCell>Quantity</CheckoutPageTableHeadCell>
          <CheckoutPageTableHeadCell>Price</CheckoutPageTableHeadCell>
          <CheckoutPageTableHeadCell>Remove</CheckoutPageTableHeadCell>
        </CheckoutPageTableRow>
      </CheckoutPageTableHead>

      <CheckoutPageTableBody>
        {cartItems.map((item) => (
          <CheckoutCartItem key={item.id} item={item} />
        ))}
      </CheckoutPageTableBody>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <h3 style={{ marginRight: 50 }}>TOTAL : ${total}</h3>

        <StripCheckoutButton price={total} />
      </div>
    </CheckoutPageTable>
  </CheckoutPageContainer>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectTotalPrice,
});

export default connect(mapStateToProps)(CheckoutPage);
