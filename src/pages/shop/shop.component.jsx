import React from 'react';

import SHOP_DATA from './shop.data';

import CollectionPreview from '../../components/preview-collection/collection-preview.component';

class ShopPage extends React.Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...otherCollectionsProps }) => (
          <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
