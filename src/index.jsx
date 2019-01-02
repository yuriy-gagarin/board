import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { configureStore } from './state'

import { getThreads, getThread } from './state/board/operations'
import { changeRouteBoard, changeRouteThread } from './state/board/actions'

import Board from './components/Board'
import Thread from './components/Thread'
import Loading from './components/Loading'

import withBefore from './utils/withBefore'

import 'semantic-ui-css/semantic.min.css'
import './styles/index.scss'


import Header from './components/Header';

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const AsyncRoute = withBefore(
  'render', 
  (prevProps, thisProps) => prevProps.location.key !== thisProps.location.key
)(Route)

const beforeBoard = (store) => async () => {
  await getThreads()(store.dispatch)
  store.dispatch(changeRouteBoard())
  return () => <Board />
}

const beforeThread = (store) => async (props) => {
  const id = props.computedMatch.params.id
  await getThread(id)(store.dispatch)
  store.dispatch(changeRouteThread(id))
  return () => <Thread threadId={id} />
}

const Root = ({ store }) => (
  <Provider store={store}>
    <Header />
    <BrowserRouter>
      <Switch>
        <AsyncRoute exact path='/' before={beforeBoard(store)} />
        <AsyncRoute path='/thread/:id' before={beforeThread(store)} />
      </Switch>
    </BrowserRouter>
    <Loading />
  </Provider>
)

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
