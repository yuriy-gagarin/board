import { mockThread } from '../utils/createMocks'
import { delay, simulateNetworkDelay } from '../utils/delay'
import { randint } from '../utils/randint'
import { ThreadObject, ThreadsResponse, ThreadResponse, MockThreadObject, ErrorResponse } from '../types'

let data : MockThreadObject[] = []

Promise.all([...Array(10)].map(mockThread)).then(result => {
  data = result
})

export async function getThreads () : Promise<ThreadsResponse> {
  await simulateNetworkDelay()
  return {
    threads: data,
    error: false
  }
}

export async function getThread (id : string) : Promise<ThreadResponse | ErrorResponse> {
  await simulateNetworkDelay()
  const thread = data.find(thread => thread.id === id)
  if (!thread) throw {
    error: true,
    reason: 'Invalid thread ID.'
  } 
  return {
    thread,
    error: false
  }
}
