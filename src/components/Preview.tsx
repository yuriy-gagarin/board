import React from 'react'

import { connect } from 'react-redux'
import { selectors } from '../state/board'
import { ReduxState, ThreadObject, PostObject } from '../types'

import Post from './Post'

interface PreviewOwnProps {
  thread : ThreadObject,
}

interface PreviewStateProps {
  posts : PostObject[],
  op : PostObject
}

type PreviewProps = PreviewOwnProps & PreviewStateProps

const Preview = ({ thread: { id, postCount }, posts, op } : PreviewProps) => {
  const opElement = <Post key={op.id} post={op} isOp index={0} threadId={id} isPreview />

  const postElements = posts.map((post : PostObject, index : number) => {
    const postIndex = index + postCount - posts.length
    return <Post key={post.id} post={post} isOp={false} index={postIndex} threadId={id} isPreview />
  })

  return <div className='Preview'> {opElement} {postElements} </div>
}

const props = (state : ReduxState, ownProps : PreviewOwnProps) => ({
  posts: selectors.getPosts(state, ownProps.thread.id),
  op: selectors.post(state, ownProps.thread.op)
})

export default connect(props)(Preview)
