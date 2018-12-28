import React from 'react'

class Header extends React.Component {
  componentDidMount () {
    const { type, noOfThreads, threadId } = this.props
    
    if (type === 'board') {
      noOfThreads
        ? document.title = 'This is a board'
        : document.title = 'This is a board and there are no threads...'
    } else if (type === 'thread') {
      threadId && threadId === '-1'
        ? document.title = 'This thread doesn\'t exist.'
        : document.title = `This is a thread #${threadId}`
    }
  }

  render () {
    const { type, noOfThreads, threadId } = this.props

    let header = null

    if (type === 'board') {
      header = <header><h1>This is a board</h1></header>
    } else if (type === 'thread') {
      header = threadId && threadId === '-1'
        ? <header><h1>This thread doesn't exist.</h1></header>
        : <header><h1>This is a thread #{threadId}</h1></header>
    }

    return header
  }
}

export default Header
