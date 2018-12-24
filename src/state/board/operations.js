import * as actions from './actions'
import * as boardApi from '../../api/board'

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
