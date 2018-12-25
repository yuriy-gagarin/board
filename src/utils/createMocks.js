import { randint } from './randint'

import { LOREM_IPSUM } from '../constants'
import { createRandomTextGenerator } from './randomText';

export const countFrom = (start) => {
  let value = start
  return () => value++
}

export const stringify = (f) => {
  return () => f().toString() 
}

export const dateBetween = (from, to) => {
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
const text = createRandomTextGenerator()
const postCount = randint.bind(null, 2, 10)

export const mockPost = async () => ({
  id: id(),
  createdAt: createdAt(),
  readableId: readableId(),
  text: (await text.next()).value,
})

export const mockThread = async () => {
  const count = postCount()
  return {
    id: id(),
    op: await mockPost(),
    posts: await Promise.all([...Array(count - 1)].map(mockPost)),
    postCount: count
  }
}
