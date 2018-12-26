import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './board'

export function configureStore () {

  const middlewares = [
    thunk
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
      createLogger({ collapsed: true })
    )
  }

  const composeEnhancer = process.env.NODE_ENV !== 'production' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose)

  return createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
  )
}
