// types
import { FSA, ErrorFSA } from 'flux-standard-action'
import { ActionCreator, Action } from 'redux'
import { ThreadsResponse } from '../../types'
import { getThreads } from './actionTypes'

export const getThreadsRequest : ActionCreator<Action> = () => ({
  type: getThreads.request
})

export const getThreadsSuccess : ActionCreator<Action> = (response) => ({
  type: getThreads.success,
  payload: response
})

export const getThreadsFailure : ActionCreator<Action> = (error) => ({
  type: getThreads.failure,
  payload: error,
  error: true
})
