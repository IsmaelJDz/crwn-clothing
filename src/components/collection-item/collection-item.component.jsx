import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    {console.log(imageUrl)}
    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className='collection-footer'>
      <span className='name'> {name} </span>
      <div className='price'> {price} </div>
    </div>
  </div>
);

export default CollectionItem;
