import React from 'react'
import { connect } from 'react-redux'

import { selectors } from '../state/board'

import Preview from './Preview'

class Board extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
    document.title = `This is a board`
  }

  render () {    
    const threads = this.props.threads
    const previews = threads.map(thread =>
      <Preview key={thread.id} threadId={thread.id} postCount={thread.postCount} op={thread.op} />
    )
    return (
      <div className='Board'> 
        <header><h1>This is a board</h1></header> 
        {previews}
      </div>
    )
  }
}

const props = (state) => ({
  threads: selectors.getThreads(state),
})

export default connect(props)(Board)
