import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../state/board';

const Loading = ({ isLoading }) => (
  isLoading === 'loading'
    ? <div className='Loading'><span>LOADING</span></div>
    : isLoading ==='removing'
    ? <div className='Loading'><span>REMOVING</span></div>
    : null
)

const props = (state) => ({
  isLoading: selectors.isLoading(state)
})

export default connect(props)(Loading)
