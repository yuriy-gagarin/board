import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { configureStore } from './state'

import Board from './views/containers/Board'

import './styles/index.css'

import { Store } from 'redux'

const Root = ({ store } : { store : Store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/' component={Board} />
      </Switch>
    </Router>
  </Provider>
)

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
