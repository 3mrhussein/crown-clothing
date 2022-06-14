import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
//import './collection-preview.styles.scss';
import { withRouter } from 'react-router-dom';
import {
  CollectionPreviewItemStyledContainer,
  CollectionPreviewStyledContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, history, match }) => {
  return (
    <div
      style={{
        borderBottomLeftRadius: '10px',
        WebkitBorderBottomRightRadius: '10px',
        padding: '0 10px',
        margin: '10px 0',
        boxShadow: '1px 1px 4px gray',
      }}
    >
      <h1
        style={{ cursor: 'pointer' }}
        onClick={() => history.push(`${match.url}/${routeName}`)}
      >
        {title.toUpperCase()}
      </h1>
      {/* <div className="preview"> */}
      <CollectionPreviewStyledContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionPreviewItemStyledContainer key={item.id}>
              <CollectionItem item={item} />
            </CollectionPreviewItemStyledContainer>
          ))}
      </CollectionPreviewStyledContainer>
      {/* </div> */}
    </div>
  );
};

export default withRouter(CollectionPreview);
