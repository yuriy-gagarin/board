import React, { FunctionComponent } from 'react'
import { withRouter } from 'react-router-dom'

import { formatDate } from '../utils/formatDate'

import { PostObject, Operation } from '../types'
import { nbsp } from '../constants'
import { connect } from 'react-redux'
import { operations } from '../state/board'

interface PostProps {
  post : PostObject,
  isOp : boolean,
  index : number,
  threadId : string,
  isPreview : boolean,
  getThreadAndTransition : Operation,
  router : any
}

interface PostHeaderProps {
  isOp : boolean,
  id : string,
  createdAt : string,
  readableId : string,
}

interface PostFooterProps {
  threadId : string,
  getThreadAndTransition : Operation
}

const PostHeader : FunctionComponent<PostHeaderProps> = ({ id, isOp, readableId, createdAt }) => (
  <div>
    <span>{id + nbsp + readableId}{isOp && <span>~op</span>}</span>
    <span>{formatDate(createdAt)}</span>
  </div>
)

const PostFooter : FunctionComponent<PostFooterProps> = ({ threadId, getThreadAndTransition }) => (
  <div>
    <span><a onClick={() => getThreadAndTransition(threadId)}>Go to thread</a></span>
  </div>
)

const Post : FunctionComponent<PostProps> = (
  { post: { readableId, createdAt, text, id }, isOp, isPreview, threadId, getThreadAndTransition } 
) => (
  <div className='Post'>
    <PostHeader {...{id, isOp, readableId, createdAt}} />
    <p>{text}</p>
    { isOp && isPreview ? <PostFooter threadId={threadId} getThreadAndTransition={getThreadAndTransition} /> : null }
  </div>
)

export default connect(null, operations)(Post)
