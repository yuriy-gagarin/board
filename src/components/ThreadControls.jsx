import React from 'react'
import { Link } from 'react-router-dom'

class ThreadControls extends React.Component {
  render () {
    const { threadId } = this.props
    return (
      <div className='ThreadControls'>
        <Link to={'/thread/' + threadId}>Go to thread</Link>
        <Link to={'/thread/' + threadId}>Remove thread</Link>
      </div>
    )
  }
}

export default ThreadControls
