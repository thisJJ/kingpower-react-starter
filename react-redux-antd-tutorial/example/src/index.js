import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router' // react-router v4
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'
import { ConnectedRouter, connectRouter, routerMiddleware } from 'connected-react-router'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './reducer'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const history = createBrowserHistory()
const initialState = {}

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  initialState,
  compose(
    composeWithDevTools(),
    applyMiddleware(
      routerMiddleware(history), // for dispatching history actions
      // ... other middlewares ...
    ),
  ),
)

ReactDOM.render(
  <Provider store={store} >
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
