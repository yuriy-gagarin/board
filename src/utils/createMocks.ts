import { randint } from './randint'

import { LOREM_IPSUM } from '../constants'
import { ThreadObject, PostObject } from '../types'

export const countFrom = (start : number) => {
  let value = start
  return () : number => value++
}

export const stringify = (f : Function) => {
  return () : string => f().toString() 
}

export const dateBetween = (from : number, to : number) => {
  from = Math.ceil(from)
  to = Math.floor(to)
  return new Date(randint(from, to)).toISOString()
}


export const readableId = () => {
  const words = LOREM_IPSUM.replace(/[,.]/g, '').split(' ').map(word => word.toLowerCase())
  return words[randint(0, words.length-1)] + '~' + words[randint(0, words.length-1)]
}

const id = stringify(countFrom(1))

const createdAt = dateBetween.bind(null, Math.pow(10, 12) * 14, Math.pow(10, 12) * 16)

const text = () => LOREM_IPSUM

const postCount = randint.bind(null, 2, 10)

export const mockPost = () : PostObject => ({
  id: id(),
  createdAt: createdAt(),
  readableId: readableId(),
  text: text(),
})

export const mockThread = () : ThreadObject => {
  const count = postCount()
  return {
    id: id(),
    op: mockPost(),
    posts: [...Array(count - 1)].map(mockPost),
    postCount: count
  }
}
