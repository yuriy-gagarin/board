import * as actions from './actions'
import * as boardApi from '../../api/board'

import { Thunk, AsyncThunk } from '../../types'
import history from '../../history';

export const getThreads : AsyncThunk = () => dispatch => {
  dispatch(actions.getThreadsRequest())
  return boardApi.getThreads().then(
    response => dispatch(actions.getThreadsSuccess(response)),
    error => dispatch(actions.getThreadsFailure(error))
  )
}

export const getThread : AsyncThunk = (id : string) => dispatch => {
  dispatch(actions.getThreadRequest(id))
  return boardApi.getThread(id).then(
    response => dispatch(actions.getThreadSuccess(response)),
    error => dispatch(actions.getThreadFailure(error))
  )
}

export const enteringBoard : Thunk = () => (dispatch) => dispatch(actions.changeRouteBoard())

export const enteringThread : Thunk = (id : string) => (dispatch) => dispatch(actions.changeRouteThread(id))

export const getThreadAndTransition : AsyncThunk = (id : string) => (dispatch) => {
  dispatch(actions.getThreadRequest(id))
  return boardApi.getThread(id).then(
    response => dispatch(actions.getThreadSuccess(response)),
    error => dispatch(actions.getThreadFailure(error))
  ).then(
    () => history.push(id)
  )
}
