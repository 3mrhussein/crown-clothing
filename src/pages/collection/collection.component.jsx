import React from 'react';
import './collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { ItemsStyledContainer } from './collection.styles';
import { CollectionPreviewItemStyledContainer } from '../../components/preview-collection/collection-preview.styles';
const CollectionPage = ({ collection, match }) => {
  const { items, title } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      {/* <div className="items"> */}
      <ItemsStyledContainer>
        {items.map((item) => (
          <CollectionPreviewItemStyledContainer key={item.id}>
            <CollectionItem item={item} />
          </CollectionPreviewItemStyledContainer>
        ))}
      </ItemsStyledContainer>
      {/* </div> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(CollectionPage);
