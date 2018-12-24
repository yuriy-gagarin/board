export const thread = (state, id) =>
  state.threads.objects[id] || { id: '', posts: [], op: '' }

export const ids = (state) =>
  state.threads.ids

export const post = (state, id) =>
  state.posts.objects[id] || { id: '' }

export const getThreads = (state) =>
  ids(state).map(id => thread(state, id))

export const getPosts = (state, id) =>
  thread(state, id).posts.map(id => post(state, id))

export const isLoading = (state) =>
  state.isLoading
