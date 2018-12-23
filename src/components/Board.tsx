import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { operations } from '../state/board'
import { selectors } from '../state/board'
import { ReduxState, ThreadObject } from '../types'

import Preview from './Preview'

interface BoardProps {
  threads : ThreadObject[],
  getThreads : (...args: any[]) => void
}

const Board = ({ threads, getThreads } : BoardProps) => {
  
  useEffect(() => {
    getThreads()
  }, [])

  const previews = threads.map(thread =>
    <li key={thread.id}> <Preview thread={thread} /> </li>
  )
  return <ul className='Board'> {previews} </ul>
}

const props = (state : ReduxState) => ({
  threads: selectors.getThreads(state),
})

export default connect(props, operations)(Board)
