import * as actions from './actions'
import * as boardApi from '../../api/board'

import { Thunk } from '../../types'

export const getThreads : Thunk = () => (dispatch, getState) => {
  dispatch(actions.getThreadsRequest())
  return boardApi.getThreads().then(
    response => dispatch(actions.getThreadsSuccess(response)),
    error => dispatch(actions.getThreadsFailure(error))
  )
}
