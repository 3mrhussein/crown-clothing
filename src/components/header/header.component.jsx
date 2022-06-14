import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionContainer,
} from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionContainer to="/shop">Shop</OptionContainer>
      <OptionContainer to="/shop">Contact</OptionContainer>
      {currentUser ? (
        <OptionContainer
          as="div"
          onClick={() => {
            signOutStart();
          }}
        >
          Sign Out
        </OptionContainer>
      ) : (
        <OptionContainer
          style={{ backgroundColor: '#333333', color: 'white' }}
          to="/signin"
        >
          {' '}
          Sign In
        </OptionContainer>
      )}

      <OptionContainer as="div">
        <CartIcon />{' '}
      </OptionContainer>
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
