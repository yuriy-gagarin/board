import { schema, normalize } from 'normalizr'
import { getThreads, getThread, changeRoute, removeThread } from './actionTypes'

const postSchema = new schema.Entity('posts')

const threadSchema = {
  thread: {
    posts: [ postSchema ],
    op: postSchema
  }
}

const threadsSchema = {
  threads: [ 
    new schema.Entity('threads', {
      posts: [ postSchema ],
      op: postSchema
    })
  ]
}

export const getThreadsRequest = () => ({
  type: getThreads.request
})

export const getThreadsSuccess = (response) => ({
  type: getThreads.success,
  payload: normalize(response, threadsSchema)
})

export const getThreadsFailure = (error) => ({
  type: getThreads.failure,
  payload: error,
  error: true
})

export const getThreadRequest = (id) => ({
  type: getThread.request,
  payload: { id }
})

export const getThreadSuccess = (response) => ({
  type: getThread.success,
  payload: normalize(response, threadSchema)
})

export const getThreadFailure = (error) => ({
  type: getThread.failure,
  payload: error,
  error: true
})

export const removeThreadRequest = (id) => ({
  type: removeThread.request,
  payload: { id }
})

export const removeThreadSuccess = (response) => ({
  type: removeThread.success,
  payload: response
})

export const removeThreadFailure = (error) => ({
  type: removeThread.failure,
  payload: error,
  error: true
})

export const changeRouteBoard = () => ({
  type: changeRoute.board
})

export const changeRouteThread = (id) => ({
  type: changeRoute.thread,
  payload: { id }
})
