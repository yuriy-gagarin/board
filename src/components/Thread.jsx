import React from 'react'
import { operations, selectors } from '../state/board'
import Post from './Post'
import { connect } from 'react-redux'

class Thread extends React.Component {
  componentWillMount() {
    this.props.getThread(this.props.threadId)
  }

  render() {
    const { posts, op, threadId, postCount } = this.props
    if (!posts.length || !op.id) return null

    const opElement = <Post key={op.id} post={op} isOp index={0} threadId={threadId} isPreview={false} />

    const postElements = posts.map((post, index) => {
      const postIndex = index + postCount - posts.length
      return <Post key={post.id} post={post} isOp={false} threadId={threadId} index={postIndex} isPreview={false} />
    })

    return <div className='Thread'> {opElement} {postElements} </div>
  }
}

const props = (state, { match }) => {
  const thread = selectors.thread(state, match.params.id)
  return {
    posts: selectors.getPosts(state, thread.id),
    op: selectors.post(state, thread.op),
    postCount: thread.postCount,
    threadId: match.params.id
  }
}

export default connect(props, operations)(Thread)
