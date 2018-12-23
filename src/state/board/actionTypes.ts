import { ACTION_SEPARATOR } from '../../constants'

const name = (...args : string[]) => {
  return args.join(ACTION_SEPARATOR)
}

const REQUEST = 'request'
const SUCCESS = 'success'
const FAILURE = 'failure'
const GET_THREADS = 'getThreads'

export const getThreads = {
  request: name(GET_THREADS, REQUEST),
  success: name(GET_THREADS, SUCCESS),
  failure: name(GET_THREADS, FAILURE)
}
