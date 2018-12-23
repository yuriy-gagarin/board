import { ReduxState } from '../../types'

export const thread = (state : ReduxState, id : string) =>
  state.threads.objects[id]

export const ids = (state : ReduxState) =>
  state.threads.ids

export const post = (state : ReduxState, id : string) =>
  state.posts.objects[id]

export const getThreads = (state : ReduxState) =>
  ids(state).map(id => thread(state, id))

export const getPosts = (state : ReduxState, id : string) =>
  thread(state, id).posts.map(id => post(state, id))
