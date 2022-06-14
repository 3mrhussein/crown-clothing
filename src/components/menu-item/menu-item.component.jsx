import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  BackgroundImage,
  MenuItemContainer,
  MenuItemContentContainer,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  //   <div
  //     //  className={`${size} menu-item`}
  //     onClick={() => history.push(`${match.url}${linkUrl}`)}
  //   >
  <MenuItemContainer
    className={`${size}`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    {/* <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      /> */}
    <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
    <MenuItemContentContainer>
      <h1 className="title">{title.toUpperCase()} </h1>
      <span className="subtitle">SHOP NOW</span>
    </MenuItemContentContainer>
  </MenuItemContainer>
  /* </div> */
);

export default withRouter(MenuItem);
