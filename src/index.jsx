import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { configureStore } from './state'

import { getThreads, getThread } from './state/board/operations'

import Board from './components/Board'
import Thread from './components/Thread'
import Loading from './components/Loading'

import withBefore from './utils/withBefore'

import './styles/index.scss'

if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual'
}

const AsyncRoute = withBefore('render', (prevProps, thisProps) => 
  prevProps.location.key !== thisProps.location.key
)(Route)

const Root = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <AsyncRoute exact path='/' before={async () => {
            await getThreads()(store.dispatch)
            return () => <Board />
        }} />
        <AsyncRoute path='/:id' before={async props => {
            const id = props.computedMatch.params.id
            await getThread(id)(store.dispatch)
            return () => <Thread threadId={id} />
        }} />
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
