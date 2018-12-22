import { mockThread } from '../utils/createMocks'
import { delay } from '../utils/delay'
import { randint } from '../utils/randint'

//types
import { ThreadObject, ThreadsResponse } from '../types'

const data : { threads : ThreadObject[] } = {
  threads: [...Array(10)].map(mockThread)
}

export async function getThreads () : Promise<ThreadsResponse> {
  await delay(randint(100, 400))
  return {
    data: data.threads,
    error: false
  }
}
