import React, { useEffect } from 'react'

import Board from '../components/Board'
import { connect } from 'react-redux'
import { operations } from '../../state/board'
import { selectors } from '../../state/board'

import { ReduxState, Thunk, ThreadObject } from '../../types'

interface BoardContainerProps {
  threads : ThreadObject[],
  getThreads : (...args: any[]) => void
}

const BoardContainer = ({ threads, getThreads } : BoardContainerProps) => {
  
  useEffect(() => {
    getThreads()
  }, [])

  return <Board threads={threads} />
}

const props = (state : ReduxState) => ({
  threads: selectors.getThreads(state)
})

export default connect(props, operations)(BoardContainer)
