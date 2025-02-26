import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionsLoaded } from 'redux/shop/shop.selectors'
import WithSpinner from 'components/with-spinner/with-spinner.component'
import CollectionsPage from 'pages/collection/collection.component'

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectIsCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsPage)

export default CollectionPageContainer
