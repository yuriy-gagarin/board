import { combineReducers, Reducer } from 'redux'
import { getThreads, getThread, changeRoute } from './actionTypes'

const threadObjects : Reducer = (state = {}, action) => {
  switch (action.type) {
    case getThreads.success:
      return {
        ...state,
        ...action.payload.entities.threads
      }
    case getThread.success:
      return {
        ...state,
        [action.payload.result.thread.id]: action.payload.result.thread
      }
    default:
      return state
  }
}

const threadIds : Reducer = (state = [], action) => {
  switch (action.type) {
    case getThreads.success:
      return action.payload.result.threads
    default:
      return state
  }
}

const postObjects : Reducer = (state = {}, action) => {
  switch (action.type) {
    case getThreads.success:
    case getThread.success:
      return {
        ...state,
        ...action.payload.entities.posts
      }
    default:
      return state
  }
}

const isLoading : Reducer = (state = false, action) => {
  switch (action.type) {
    case getThreads.request:
    case getThread.request:
      return true
    case getThreads.success:
    case getThreads.failure:
    case getThread.success:
    case getThread.failure:
      return false
    default:
      return state
  }
}

const threads = combineReducers({
  objects: threadObjects,
  ids: threadIds
})

const posts = combineReducers({
  objects: postObjects
})

const reducer = combineReducers({
  threads,
  posts,
  isLoading
})

export default reducer
