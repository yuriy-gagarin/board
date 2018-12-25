import React from 'react'

import { connect } from 'react-redux'
import { operations } from '../state/board'
import { selectors } from '../state/board'

import Preview from './Preview'

const props = (state) => ({
  threads: selectors.getThreads(state),
})

class Board extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    console.log('rendering board')

    const threads = this.props.threads
    const previews = threads.map(thread =>
      <Preview key={thread.id} thread={thread} />
    )
    return <div className='Board'> <header><span>This is a board</span></header> {previews} </div>
  }
}

export default connect(props, operations)(Board)
