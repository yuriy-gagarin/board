import React from 'react'

import { ThreadObject, PostObject } from '../../types'

import Post from './Post'

interface PreviewProps {
  thread : ThreadObject
}

const Preview = ({ thread: { id, posts, postCount, op } } : PreviewProps) => {
  const opElement = <li key={op.id}> <Post post={op} isOp index={0}/> </li>

  const postElements = posts.map((post : PostObject, index : number) => {
    const postIndex = index + postCount - posts.length
    return <li key={post.id}> <Post post={post} isOp={false} index={postIndex}/> </li>
  })

  return <ul className='Preview'> {opElement} {postElements} </ul>
}

export default Preview
