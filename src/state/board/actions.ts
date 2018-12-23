import { schema, normalize } from 'normalizr'
import { Action, ActionCreator } from 'redux'
import { getThreads } from './actionTypes'

const threadsSchema = {
  data: [ 
    new schema.Entity('threads', {
      posts: [ new schema.Entity('posts') ]
    })
  ]
}

export const getThreadsRequest : ActionCreator<Action> = () => ({
  type: getThreads.request
})

export const getThreadsSuccess : ActionCreator<Action> = (response) => ({
  type: getThreads.success,
  payload: normalize(response, threadsSchema)
})

export const getThreadsFailure : ActionCreator<Action> = (error) => ({
  type: getThreads.failure,
  payload: error,
  error: true
})
