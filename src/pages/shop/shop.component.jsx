import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { firestore, convertSnapshotToMap } from 'firebase/firebase.utils'
import { updateCollections } from 'redux/shop/shop.actions'

import WithSpinner from 'components/with-spinner/with-spinner.component'
import CollectionsOverview from 'components/collections-overview/collections-overview.component'
import CollectionPage from 'pages/collection/collection.component'

import './shop.styles.sass'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
  state = {
    loading: true
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionRef = firestore.collection('collections')

    collectionRef.get().then(async snapshot => {
      const collectionsMap = convertSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { match } = this.props

    return (
      <div className="shop-page">
        <Route
          exact
          path={match.path}
          render={props =>
            <CollectionsOverviewWithSpinner isLoading={this.state.loading} { ...props } />
          }
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props =>
            <CollectionPageWithSpinner isLoading={this.state.loading} { ...props } />
          }
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)

// References:

// === Fetch ===
// fetch('https://firestore.googleapis.com/v1/projects/crwn-db-d8988/databases/(default)/documents/collections')
// .then(response => response.json())
// .then(collections => console.log(collections))
