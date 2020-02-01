import React, { useEffect, lazy, Suspense } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStart } from 'redux/shop/shop.actions'
import './shop.styles.sass'

const CollectionsOverviewContainer = lazy(() => import('components/collections-overview/collections-overview.container'))
const CollectionPageContainer = lazy(() => import('pages/collection/collection.container'))

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart()
  }, [fetchCollectionsStart])

  return (
    <div className="shop-page">
      <Suspense fallback={<div>Loading...</div>}>
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)

// References:

// === Fetch ===
// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-d8988/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections))
