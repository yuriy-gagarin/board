import React from 'react'
import { operations, selectors } from '../state/board'
import Post from './Post'
import { connect } from 'react-redux'

class Thread extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    const { posts, op, threadId, postCount } = this.props

    const opElement = <Post key={op.id} post={op} isOp index={0} threadId={threadId} isPreview={false} />

    const postElements = posts.map((post, index) => {
      const postIndex = index + postCount - posts.length
      return <Post key={post.id} post={post} isOp={false} threadId={threadId} index={postIndex} isPreview={false} />
    })

    return (
      <div className='Thread'> 
        <header><span>This is a thread #{threadId}</span></header> 
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

export default connect(props, operations)(Thread)
