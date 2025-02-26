import React from 'react'
import { Link } from 'react-router-dom'
import CollectionItem from 'components/collection-item/collection-item.component'
import './collection-preview.styles.sass'

const CollectionPreview = ({ title, items, routeName }) => (
  <div className="collection-preview">
    <Link to={`shop/${routeName}`}>
      <h1 className="title">{title.toUpperCase()}</h1>
    </Link>

    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item}/>
        ))}
    </div>
  </div>
)

export default CollectionPreview
