import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../state/board';
import { ReduxState } from '../types';
interface LoadingProps {
  isLoading : boolean
}

const Loading = ({ isLoading } : LoadingProps) => (
  isLoading
    ? <div className='Loading'><span>LOADING</span></div>
    : null
)

const props = (state : ReduxState) => ({
  isLoading: selectors.isLoading(state)
})

export default connect(props)(Loading)
