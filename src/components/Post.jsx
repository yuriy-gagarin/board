import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../utils/formatDate'

import { nbsp } from '../constants'
import { connect } from 'react-redux'
import { operations } from '../state/board'

const PostHeader = ({ id, isOp, readableId, createdAt }) => (
  <div>
    <span>{id + nbsp + readableId}{isOp && <span>~op</span>}</span>
    <span>{formatDate(createdAt)}</span>
  </div>
)

const PostFooter = ({ threadId }) => (
  <div>
    <span><Link to={'/thread/' + threadId}>Go to thread</Link></span>
  </div>
)

const Post = (
  { post: { readableId, createdAt, text, id }, isOp, isPreview, threadId } 
) => (
  <div className='Post'>
    <PostHeader {...{id, isOp, readableId, createdAt}} />
    <p>{text}</p>
    { isOp && isPreview ? <PostFooter threadId={threadId} /> : null }
  </div>
)

export default connect(null, operations)(Post)
