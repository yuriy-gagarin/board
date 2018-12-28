import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { operations } from '../state/board'

class ThreadControls extends React.Component {
  render () {
    const { threadId, removeThread, location } = this.props
    return (
      <div className='ThreadControls'>
        <Link className='action' to={'/thread/' + threadId}>Go to thread</Link>
        <button className='action' onClick={() => removeThread(threadId)}>Remove thread</button>
      </div>
    )
  }
}

export default connect(null, operations)(ThreadControls)
