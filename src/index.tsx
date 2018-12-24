import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, Switch} from 'react-router-dom'

import { configureStore } from './state'
import history from './history'

import Board from './components/Board'
import Thread from './components/Thread'
import Loading from './components/Loading'

import './styles/index.scss'

import { Store } from 'redux'

const Root = ({ store } : { store : Store }) => (
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Board} />
        <Route path='/:id' component={Thread} />
      </Switch>
    </Router>
    <Loading />
  </Provider>
)

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
