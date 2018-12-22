import React from 'react'

import Preview from './Preview'

import { ThreadObject } from '../../types'

interface BoardProps {
  threads : ThreadObject[]
}

const Board = ({ threads } : BoardProps) => {
  const previews = threads.map(thread =>
    <li key={thread.id}> <Preview thread={thread} /> </li>
  )
  return <ul> {previews} </ul>
}

export default Board
