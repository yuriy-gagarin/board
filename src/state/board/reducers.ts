import { combineReducers, Reducer } from 'redux'
import { getThreads } from './actionTypes'

const threadObjects : Reducer = (state = {}, action) => {
  switch (action.type) {
    case getThreads.request:
    case getThreads.success:
    case getThreads.failure:
    default:
      return state
  }
}

const threadIds : Reducer = (state = [], action) => {
  switch (action.type) {
    case getThreads.request:
    case getThreads.success:
    case getThreads.failure:
    default:
      return state
  }
}

const threads = combineReducers({
  objects: threadObjects,
  ids: threadIds
})

const reducer = combineReducers({
  threads
})

export default reducer
