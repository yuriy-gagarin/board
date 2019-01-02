import { combineReducers } from 'redux'
import { getThreads, getThread, changeRoute, removeThread } from './actionTypes'

const threadObjects = (state = {}, action) => {
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
    case removeThread.success:
      return {
        ...state,
        [action.payload.removed]: undefined
      }
    default:
      return state
  }
}

const threadIds = (state = [], action) => {
  switch (action.type) {
    case getThreads.success:
      return action.payload.result.threads
    case removeThread.success:
      return state.filter(id => id !== action.payload.removed)
    default:
      return state
  }
}

const postObjects = (state = {}, action) => {
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

const isLoading = (state = false, action) => {
  switch (action.type) {
    case getThreads.request:
    case getThread.request:
      return 'loading'
    case removeThread.request:
      return 'removing'
    case getThreads.success:
    case getThreads.failure:
    case getThread.success:
    case getThread.failure:
    case removeThread.success:
    case removeThread.failure:
      return false
    default:
      return state
  }
}

const currentView = (state = '', action) => {
  switch (action.type) {
    case changeRoute.thread:
      return 'thread'
    case changeRoute.board:
      return 'board'
    default:
      return state
  }
}

const currentThread = (state = '', action) => {
  switch (action.type) {
    case changeRoute.thread:
      return action.payload.id
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
  isLoading,
  currentView,
  currentThread
})

export default reducer
