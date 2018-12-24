import { ACTION_SEPARATOR } from '../../constants'

const name = (...args : string[]) => {
  return args.join(ACTION_SEPARATOR)
}

const REQUEST = 'request'
const SUCCESS = 'success'
const FAILURE = 'failure'
const GET_THREADS = 'getThreads'
const GET_THREAD = 'getThread'
const CHANGE_ROUTE = 'changeRoute'
const BOARD = 'board'
const THREAD = 'thread'

export const getThreads = {
  request: name(GET_THREADS, REQUEST),
  success: name(GET_THREADS, SUCCESS),
  failure: name(GET_THREADS, FAILURE)
}

export const getThread = {
  request: name(GET_THREAD, REQUEST),
  success: name(GET_THREAD, SUCCESS),
  failure: name(GET_THREAD, FAILURE)
}

export const changeRoute = {
  board: name(CHANGE_ROUTE, BOARD),
  thread: name(CHANGE_ROUTE, THREAD)
}
