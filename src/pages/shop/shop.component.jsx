import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from 'redux/shop/shop.actions'
import { selectIsCollectionsFetching } from 'redux/shop/shop.selectors'
import WithSpinner from 'components/with-spinner/with-spinner.component'
import CollectionsOverview from 'components/collections-overview/collections-overview.component'
import CollectionPage from 'pages/collection/collection.component'

import './shop.styles.sass'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null

  componentDidMount() {
    fetchCollectionsStartAsync()
  }

  render() {
    const { match, isCollectionFetching } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={props =>
            <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} { ...props } />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props =>
            <CollectionPageWithSpinner isLoading={isCollectionFetching} { ...props } />
          }
        />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionsFetching
})

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)

// References:

// === Fetch ===
// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-d8988/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections))
