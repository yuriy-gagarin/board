import { mockThread } from '../utils/createMocks'
import { delay, simulateNetworkDelay } from '../utils/delay'
import { randint } from '../utils/randint'

let data = []

Promise.all([...Array(10)].map(mockThread)).then(result => {
  data = result
})

export async function getThreads () {
  await simulateNetworkDelay()
  return {
    threads: data,
    error: false
  }
}

export async function getThread (id) {
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
