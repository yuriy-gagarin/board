import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { operations } from '../state/board'
import { selectors } from '../state/board'
import { ReduxState, ThreadObject, Operation } from '../types'

import Preview from './Preview'
import Loading from './Loading'

interface BoardProps {
  threads : ThreadObject[],
  getThreads : Operation,
  enteringBoard : Operation
}

const Board = ({ threads, getThreads, enteringBoard } : BoardProps) => {
  
  useEffect(() => {
    enteringBoard()
  }, [])
  
  useEffect(() => {
    getThreads()
  }, [])

  const previews = threads.map(thread =>
    <Preview key={thread.id} thread={thread} />
  )
  return <div className='Board'> {previews} </div>
}

const props = (state : ReduxState) => ({
  threads: selectors.getThreads(state),
})

export default connect(props, operations)(Board)
