import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectors } from '../state/board'

import Preview from './Preview'
import Header from './Header'


class Board extends React.Component {
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
      previews = <><div><h1>and there are no threads...</h1></div><Link className='not-found' to='/'></Link></>
    }


    const header = <Header type='board' noOfThreads={previews.length} />
    
    return (
      <div className='Board'> 
        {header}
        {previews}
      </div>
    )
  }
}

const props = (state) => ({
  threads: selectors.getThreads(state),
})

export default connect(props)(Board)
