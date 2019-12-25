import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CategoryPage from '../../pages/Category/Category'

const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={match.path} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
)

export default ShopPage
