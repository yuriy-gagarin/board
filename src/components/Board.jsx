import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import { operations } from '../state/board'
import { selectors } from '../state/board'

import Preview from './Preview'

const props = (state) => ({
  threads: selectors.getThreads(state),
})

class Board extends React.Component {
  componentWillMount() {
    this.props.getThreads()
  }
  
  render() {
    const threads = this.props.threads
    const previews = threads.map(thread =>
      <Preview key={thread.id} thread={thread} />
    )
    return <div className='Board'> {previews} </div>
  }
}

export default connect(props, operations)(Board)
