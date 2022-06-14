import React from 'react';
//import './collection-item.styles.scss'
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addCartItem } from '../../redux/cart/cart.actions';
import { CollectionItemStyledContainer } from './collection-item.styles';

const CollectionItem = ({ item, addCartItem }) => (
  //   <div className="collection-item">
  <CollectionItemStyledContainer>
    <div
      className="image"
      style={{
        backgroundImage: `url(${item.imageUrl})`,
      }}
    />

    <div className="collection-footer">
      <span className="name">{item.name}</span>
      <span className="price">{item.price}$</span>
    </div>
    <CustomButton inverted onClick={() => addCartItem(item)}>
      Add to Cart
    </CustomButton>
  </CollectionItemStyledContainer>
  //   </div>
);

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (item) => dispatch(addCartItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
