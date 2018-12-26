import React from 'react'
import { Link } from 'react-router-dom'

import { formatDate } from '../utils/formatDate'

import { nbsp } from '../constants'

import ThreadControls from './ThreadControls'

const PostHeader = ({ id, isOp, readableId, createdAt, index }) => (
  <div>
    <span>{id + nbsp + readableId}{isOp && <span>~op</span>}{nbsp}<span>{index}</span></span>
    <span>{formatDate(createdAt)}</span>
  </div>
)

const PostFooter = ({ threadId, postCount }) => (
  <div>
    <ThreadControls threadId={threadId} />
    <span>Total posts: {postCount}</span>
  </div>
)

const Post = (
  { post: { readableId, createdAt, text, id }, index, isOp, isPreview, threadId, postCount } 
) => (
  <div className='Post'>
    <PostHeader {...{id, isOp, readableId, createdAt, index}} />
    <p>{text}</p>
    { isOp && isPreview ? <PostFooter threadId={threadId} postCount={postCount} /> : null }
  </div>
)

export default Post
