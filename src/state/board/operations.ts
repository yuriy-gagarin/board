import * as actions from './actions'
import * as boardApi from '../../api/board'

import { Action, ActionCreator } from 'redux'
import { Thunk, ReduxState } from '../../types'
import { ThunkAction } from 'redux-thunk';

export const getThreads : Thunk = () => (dispatch, getState) => {
  dispatch(actions.getThreadsRequest())
  return boardApi.getThreads().then(
    response => dispatch(actions.getThreadsSuccess(response)),
    error => dispatch(actions.getThreadsFailure(error))
  )
}
