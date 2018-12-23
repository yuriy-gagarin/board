import { mockThread } from '../utils/createMocks'
import { delay } from '../utils/delay'
import { randint } from '../utils/randint'
import { ThreadObject, ThreadsResponse } from '../types'

const data = async () => ({
  threads: await Promise.all([...Array(10)].map(mockThread))
})

export async function getThreads () : Promise<ThreadsResponse> {
  await delay(randint(100, 400))
  return {
    data: (await data()).threads,
    error: false
  }
}
