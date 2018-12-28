import React from 'react'
import { connect } from 'react-redux'
import { selectors } from '../state/board';

class Header extends React.Component {
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
          if (scrollPosition > 5) {
            this.ref.current.classList.add('scrolled')
          } else {
            this.ref.current.classList.remove('scrolled')
          }
          waitingForFrame = false
        })
        waitingForFrame = true
      }

    }
  }

  handleScroll = this.createHandleScroll()

  render () {
    const { type, threadId } = this.props

    let text = ''

    if (type === 'board') {
      text = 'This is a board'
    } else if (type === 'thread') {
      text = threadId && threadId === '-1'
        ? 'This thread doesn\'t exist.'
        : `This is a thread #${threadId}`
    }

    return <div className='Header' ref={this.ref}><header><h1>{text}</h1></header></div>
  }
}

const props = (state) => ({
  type: selectors.currentView(state)
})

export default connect(props)(Header)
