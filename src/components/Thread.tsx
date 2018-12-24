import React, { useEffect } from 'react'
import { match } from 'react-router'
import { operations, selectors } from '../state/board'
import { PostObject, ReduxState } from '../types'
import Post from './Post'
import { connect } from 'react-redux'

interface ThreadOwnProps {
  match : match<{ id : string }>
}

interface ThreadStateProps {
  posts : PostObject[],
  op : PostObject,
  postCount : number,
  threadId : string
}

interface ThreadDispatchProps {
  getThread : (...args : any[]) => void
}

type ThreadProps = ThreadStateProps & ThreadDispatchProps

const Thread = ({ posts, op, postCount, threadId, getThread } : ThreadProps) => {
  if (!posts.length || !op.id) return null

  const opElement = <Post key={op.id} post={op} isOp index={0} threadId={threadId} isPreview={false} />

  const postElements = posts.map((post : PostObject, index : number) => {
    const postIndex = index + postCount - posts.length
    return <Post key={post.id} post={post} isOp={false} threadId={threadId} index={postIndex} isPreview={false} />
  })

  return <div className='Thread'> {opElement} {postElements} </div>
}

const props = (state : ReduxState, { match } : ThreadOwnProps) => {
  const thread = selectors.thread(state, match.params.id)
  return {
    posts: selectors.getPosts(state, thread.id),
    op: selectors.post(state, thread.op),
    postCount: thread.postCount,
    threadId: match.params.id
  }
}

export default connect(props, operations)(Thread)
