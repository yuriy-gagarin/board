import { combineReducers, Reducer } from 'redux'
import { getThreads } from './actionTypes'
import { PostObject, ThreadObject } from '../../types';

const threadObjects : Reducer = (state = {}, action) => {
  switch (action.type) {
    case getThreads.success:
      return {
        ...action.payload.entities.threads
      }
    default:
      return state
  }
}

const threadIds : Reducer = (state = [], action) => {
  switch (action.type) {
    case getThreads.success:
      return action.payload.result.data
    default:
      return state
  }
}

const postObjects : Reducer = (state = {}, action) => {
  switch (action.type) {
    case getThreads.success:
      return {
        ...action.payload.entities.posts
      }
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
  posts
})

export default reducer
