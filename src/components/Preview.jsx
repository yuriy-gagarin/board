import React from 'react'

import { connect } from 'react-redux'
import { selectors } from '../state/board'

import Post from './Post'

const Preview = ({ thread: { id, postCount }, posts, op }) => {
  const opElement = <Post key={op.id} post={op} isOp index={0} threadId={id} isPreview />

  const postElements = posts.map((post, index) => {
    const postIndex = index + postCount - posts.length
    return <Post key={post.id} post={post} isOp={false} index={postIndex} threadId={id} isPreview />
  })

  return <div className='Preview'> {opElement} {postElements} </div>
}

const props = (state, ownProps) => ({
  posts: selectors.getPosts(state, ownProps.thread.id),
  op: selectors.post(state, ownProps.thread.op)
})

export default connect(props)(Preview)
