import { ReduxState } from '../../types'

export const thread = (state : ReduxState, id : string) =>
  state.threads.objects[id]

export const ids = (state : ReduxState) =>
  state.threads.ids

export const getThreads = (state : ReduxState) =>
  ids(state).map(id => thread(state, id))
