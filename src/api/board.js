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

export async function getThreads () {
  await ensureData()
  await simulateNetworkDelay()
  return {
    threads: data,
    error: false
  }
}

export async function getThread (id) {
  await ensureData()
  await simulateNetworkDelay()
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
