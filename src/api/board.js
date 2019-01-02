import { mockThread } from '../utils/createMocks'
import { simulateNetworkDelay } from '../utils/delay'
import { debounce } from 'lodash'

let data
try {
  data = JSON.parse(localStorage.getItem('__fakeData')) || []
} catch (e) {
  console.error(e)
  data = []
}

function createData() {
  console.log('creating data... this should only happen once')
  return Promise.all([...Array(10)].map(mockThread)).then(result => {
    data = result
  })
}

const saveToLocalStorage = debounce(function () {
  try {
    localStorage.setItem('__fakeData', JSON.stringify(data))
  } catch(e) {
    console.error(e)
  }
})

async function ensureData() {
  if (data.length) return
  await createData()
  return new Promise(resolve => resolve(saveToLocalStorage()))
}

function truncatePosts (amount) {
  return (thread) => ({
    ...thread,
    posts: thread.posts.slice(-amount)
  })
}

export async function getThreads () {
  await ensureData()
  await simulateNetworkDelay()
  return {
    threads: data.map(truncatePosts(4)),
    error: false
  }
}

export async function getThread (id) {
  // await ensureData()
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

export async function removeThread (id) {
  // await ensureData()
  await simulateNetworkDelay()
  const threads = data.filter(thread => thread.id !== id)
  data = threads
  saveToLocalStorage()
  return {
    removed: id,
    error: false
  }
}
