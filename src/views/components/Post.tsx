import React from 'react'

import { formatDate } from '../../utils'

import { PostObject } from '../../types'
import { nbsp } from '../../constants'

interface PostProps {
  post : PostObject,
  isOp : boolean,
  index : number
}

interface PostHeaderProps {
  isOp : boolean,
  index : number,
  createdAt : string,
  readableId : string,
}

const PostHeader = ({ index, isOp, readableId, createdAt } : PostHeaderProps) => (
  <div>
    <span>{index + nbsp + readableId}{isOp && <span>~op</span>}</span>
    <span>{formatDate(createdAt)}</span>
  </div>
)

const Post = ({ post: { readableId, createdAt, text }, isOp, index } : PostProps) => (
  <div className='Post'>
    <PostHeader {...{index, isOp, readableId, createdAt}} />
    <p>{text}</p>
  </div>
)

export default Post
