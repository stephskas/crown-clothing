import React, {useState} from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

function ShopPage() {
  const [collections, setCollections] = useState(SHOP_DATA)
return (
  <div>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>
)
}
export default ShopPage