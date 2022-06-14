import React from 'react';

import CollectionPreview from '../preview-collection/collection-preview.component';
import { connect } from 'react-redux';
import { selectCollectionAsArray } from '../../redux/shop/shop.selector';
import { createStructuredSelector } from 'reselect';
import { CollectionOverViewStyledContainer } from './collection-overview.styles';
const CollectionOverview = ({ collections }) => {
  return (
    <CollectionOverViewStyledContainer>
      {collections.map(({ id, ...otherCollectionData }) => (
        <CollectionPreview key={id} {...otherCollectionData} />
      ))}
    </CollectionOverViewStyledContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionAsArray,
});
export default connect(mapStateToProps)(CollectionOverview);
