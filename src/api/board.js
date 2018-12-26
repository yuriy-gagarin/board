import { mockThread } from '../utils/createMocks'
import { simulateNetworkDelay } from '../utils/delay'

let data = []

function createData() {
  console.log('creating data... this should only happen once')
  return Promise.all([...Array(10)].map(mockThread)).then(result => {
    data = result
  })
}

async function ensureData() {
  if (data.length) return
  return createData()
}

function truncatePosts (amount) {
  return (thread) => ({
    ...thread,
    posts: thread.posts.slice(-amount)
  })
}

export async function getThreads () {
  await ensureData()
  // await simulateNetworkDelay()
  return {
    threads: data.map(truncatePosts(4)),
    error: false
  }
}

export async function getThread (id) {
  await ensureData()
  // await simulateNetworkDelay()
  const thread = data.find(thread => thread.id === id)
  // eslint-disable-next-line no-throw-literal
  if (!thread) throw {
    error: true,
    reason: 'Invalid thread ID.'
  } 
  return {
    thread,
    error: false
  }
}

export async function removeThread (id) {
  await ensureData()
  const threads = data.filter(thread => thread.id !== id)
  data = threads
  return {
    threads: data.map(truncatePosts(4)),
    error: false
  }
}
