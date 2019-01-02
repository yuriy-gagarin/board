import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectors } from '../state/board'

import Preview from './Preview'

class Board extends React.Component {
  ref = React.createRef()

  componentDidMount () {
    window.scrollTo(0, 0)
    document.title = `This is a board`
  }

  render () {    
    const threads = this.props.threads

    let previews

    if (threads.length) {
      previews = threads.map(thread =>
        <Preview key={thread.id} threadId={thread.id} postCount={thread.postCount} op={thread.op} />
      )
    } else {
      previews = <Link className='not-found' to='/'></Link>
    }
    
    return (
      <div ref={this.ref} className='Board'>
        {previews}
      </div>
    )
  }
}

const props = (state) => ({
  threads: selectors.getThreads(state),
})

export default connect(props)(Board)
