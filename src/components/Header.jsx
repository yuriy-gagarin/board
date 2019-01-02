import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../state/board';
import { Button } from 'semantic-ui-react';

class Header extends React.Component {
  state = { scrolled: false }
  ref = React.createRef()

  componentDidMount () {
    this.addScrollListeners()
    this.fixDocumentTitle()
  }

  componentWillUnmount () {
    this.removeScrollListeners()
  }

  fixDocumentTitle () {
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

  addScrollListeners () {
    document.addEventListener('scroll', this.handleScroll)
  }

  removeScrollListeners () {
    document.removeEventListener('scroll', this.handleScroll)
  }

  
  createHandleScroll () {
    let waitingForFrame = false
    let scrollPosition = 0

    return (event) => {
      scrollPosition = window.scrollY

      if (!waitingForFrame) {
        window.requestAnimationFrame((time) => {
          if (scrollPosition <= 0) {
            this.setState({ scrolled: false })
          } else {
            this.setState({ scrolled: true })
          }
          waitingForFrame = false
        })
        waitingForFrame = true
      }

    }
  }

  handleScroll = this.createHandleScroll()

  render () {
    const { type, thread: { id } } = this.props

    let text = ''

    if (type === 'board') {
      text = 'This is a board'
    } else if (type === 'thread') {
      text = id && id === '-1'
        ? 'This thread doesn\'t exist.'
        : `This is a thread #${id}`
    }

    const scrolled = this.state.scrolled

    return (
      <div className={scrolled ? 'Header scrolled' : 'Header'} ref={this.ref}>
        <header>
          <h1>{text}</h1>
          <Button content='New thread' color={scrolled ? 'black' : 'white'} inverted={!scrolled} />
        </header>
      </div>
    ) 
  }
}

const props = (state) => {
  const threadId = selectors.currentThread(state)
  return {
    type: selectors.currentView(state),
    thread: selectors.thread(state, threadId)
  }
}

export default connect(props)(Header)
