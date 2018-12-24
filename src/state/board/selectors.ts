import { ReduxState, PostObject, ThreadObject } from '../../types'

export const thread = (state : ReduxState, id : string) : ThreadObject =>
  state.threads.objects[id] || { id: '', posts: [], op: '' }

export const ids = (state : ReduxState) : string[] =>
  state.threads.ids

export const post = (state : ReduxState, id : string) : PostObject =>
  state.posts.objects[id] || { id: '' }

export const getThreads = (state : ReduxState) : ThreadObject[] =>
  ids(state).map(id => thread(state, id))

export const getPosts = (state : ReduxState, id : string) : PostObject[] =>
  thread(state, id).posts.map(id => post(state, id))

export const isLoading = (state : ReduxState) : boolean =>
  state.isLoading
