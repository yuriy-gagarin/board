import { createStore, applyMiddleware, compose, combineReducers, Middleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from './board'

import { Store } from 'redux'

export function configureStore () : Store {

  const middlewares : Middleware[] = [
    thunk
  ]

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(
      createLogger()
    )
  }

  const composeEnhancer = process.env.NODE_ENV !== 'production' &&
    (<any> window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  return createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middlewares)),
  )
}
