import React from 'react'

import { connect } from 'react-redux'
import { operations } from '../state/board'
import { selectors } from '../state/board'
import { ReduxState, ThreadObject, PostObject } from '../types'

import Post from './Post'

interface PreviewOwnProps {
  thread : ThreadObject,
}

interface PreviewStateProps {
  posts : PostObject[]
}

type PreviewProps = PreviewOwnProps & PreviewStateProps

const Preview = ({ thread: { id, postCount, op }, posts } : PreviewProps) => {
  const opElement = <li key={op.id}> <Post post={op} isOp index={0}/> </li>

  const postElements = posts.map((post : PostObject, index : number) => {
    const postIndex = index + postCount - posts.length
    return <li key={post.id}> <Post post={post} isOp={false} index={postIndex}/> </li>
  })

  return <ul className='Preview'> {opElement} {postElements} </ul>
}

const props = (state : ReduxState, ownProps : PreviewOwnProps) => ({
  posts: selectors.getPosts(state, ownProps.thread.id)
})

export default connect(props)(Preview)
