import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectors } from '../state/board'

import Post from './Post'
import Header from './Header'


class Thread extends React.Component {
  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render () {
    const { posts, op, threadId, postCount } = this.props

    if (threadId === '-1') return (
      <div className='Thread'>
        <Link className='not-found' to='/'></Link>
      </div>
    )

    const opElement = <Post 
      key={op.id} 
      post={op} 
      isOp 
      index={0} 
      threadId={threadId} 
      isPreview={false} 
      postCount={postCount} />

    const postElements = posts.map((post, index) => {
      const postIndex = index + postCount - posts.length
      return <Post 
        key={post.id} 
        post={post} 
        isOp={false} 
        threadId={threadId} 
        index={postIndex} 
        isPreview={false} />
    })

    return (
      <div className='Thread'> 
        {opElement} 
        {postElements} 
      </div>
    )
  }
}

const props = (state, { threadId }) => {
  const thread = selectors.thread(state, threadId)
  return {
    posts: selectors.getPosts(state, thread.id),
    op: selectors.post(state, thread.op),
    postCount: thread.postCount,
    threadId: thread.id
  }
}

export default connect(props)(Thread)
