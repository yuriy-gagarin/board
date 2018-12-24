import { schema, normalize } from 'normalizr'
import { Action, ActionCreator } from 'redux'
import { getThreads, getThread, changeRoute } from './actionTypes'
import { ThreadsResponse } from '../../types'

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

export const getThreadsRequest : ActionCreator<Action> = () => ({
  type: getThreads.request
})

export const getThreadsSuccess : ActionCreator<Action> = (response : ThreadsResponse) => ({
  type: getThreads.success,
  payload: normalize(response, threadsSchema)
})

export const getThreadsFailure : ActionCreator<Action> = (error) => ({
  type: getThreads.failure,
  payload: error,
  error: true
})

export const getThreadRequest : ActionCreator<Action> = (id : string) => ({
  type: getThread.request,
  payload: { id }
})

export const getThreadSuccess : ActionCreator<Action> = (response : ThreadsResponse) => ({
  type: getThread.success,
  payload: normalize(response, threadSchema)
})

export const getThreadFailure : ActionCreator<Action> = (error) => ({
  type: getThread.failure,
  payload: error,
  error: true
})

export const changeRouteBoard : ActionCreator<Action> = () => ({
  type: changeRoute.board
})

export const changeRouteThread : ActionCreator<Action> = (id : string) => ({
  type: changeRoute.thread,
  payload: { id }
})
