import React from 'react'
import { SpinnerOverlay, SpinnerContainer} from './with-spinner.styles'

const WithSpinner = WrappedComponent => {
  const Spinner = ({ isLoading, ...props }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent { ...props } />
    )
  }

  return Spinner
}

export default WithSpinner
