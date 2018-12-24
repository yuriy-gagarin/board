import * as actions from './actions'
import * as boardApi from '../../api/board'

import history from '../../history';

export const getThreads = () => dispatch => {
  dispatch(actions.getThreadsRequest())
  return boardApi.getThreads().then(
    response => dispatch(actions.getThreadsSuccess(response)),
    error => dispatch(actions.getThreadsFailure(error))
  )
}

export const getThread = (id) => dispatch => {
  dispatch(actions.getThreadRequest(id))
  return boardApi.getThread(id).then(
    response => dispatch(actions.getThreadSuccess(response)),
    error => dispatch(actions.getThreadFailure(error))
  )
}

export const enteringBoard = () => (dispatch) => dispatch(actions.changeRouteBoard())

export const enteringThread = (id) => (dispatch) => dispatch(actions.changeRouteThread(id))

export const getThreadAndTransition = (id) => (dispatch) => {
  dispatch(actions.getThreadRequest(id))
  return boardApi.getThread(id).then(
    response => dispatch(actions.getThreadSuccess(response)),
    error => dispatch(actions.getThreadFailure(error))
  ).then(
    () => history.push(id)
  )
}
