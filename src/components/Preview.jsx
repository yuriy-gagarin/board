import React from 'react'

import { connect } from 'react-redux'
import { selectors, operations } from '../state/board'

import Post from './Post'

class Preview extends React.Component {
  state = { isLoading: false }

  async loadThread () {
    const { getThread, threadId } = this.props
    this.setState({ isLoading: true })
    await getThread(threadId)
    this.setState({ isLoading: false })
  }

  render () {
    const { threadId, postCount, op, posts } = this.props
    const { isLoading } = this.state

    const opElement = <Post 
      key={op.id} 
      post={op} 
      isOp 
      index={0} 
      threadId={threadId} 
      isPreview
      postCount={postCount} />

    const postElements = posts.map((post, index) => {
      const postIndex = index + postCount - posts.length
      return <Post 
        key={post.id} 
        post={post} 
        isOp={false} 
        index={postIndex} 
        threadId={threadId} 
        isPreview />
    })

    let br = null

    if (isLoading)
      br = <div className='break-loading' />
    else if (postCount - 1 !== posts.length)
      br = <div className='break' onClick={() => this.loadThread()}/>
    

    return (
      <div className='Preview'>
        {opElement}
        {br}
        {postElements}
      </div>
    )
  }
}

const props = (state, ownProps) => ({
  posts: selectors.getPosts(state, ownProps.threadId),
  op: selectors.post(state, ownProps.op)
})

export default connect(props, operations)(Preview)
