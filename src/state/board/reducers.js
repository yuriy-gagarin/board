import { combineReducers } from 'redux'
import { getThreads, getThread, changeRoute, removeThread } from './actionTypes'

const threadObjects = (state = {}, action) => {
  console.log('threadObjects', state)
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

const threadIds = (state = [], action) => {
  console.log('threadIds', state)
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
  console.log('postObjects', state)
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
  console.log('isLoading', state)
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
  console.log('currentView', typeof state)
  switch (action.type) {
    case changeRoute.thread:
      return 'thread'
    case changeRoute.board:
      return 'board'
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
  currentView
})

export default reducer
