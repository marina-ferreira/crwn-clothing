import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from 'redux/shop/shop.actions'
import { selectIsCollectionsLoaded } from 'redux/shop/shop.selectors'
import CollectionsOverviewContainer from 'components/collections-overview/collections-overview.container'
import CollectionPageContainer from 'pages/collection/collection.container'

import './shop.styles.sass'

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    fetchCollectionsStartAsync()
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(ShopPage)

// References:

// === Fetch ===
// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-d8988/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections))
