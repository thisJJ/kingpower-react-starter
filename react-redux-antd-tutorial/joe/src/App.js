import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import RouteWithSubRoutes from './components/RouteWithSubRoutes'

import routes from './routes'
import logo from './logo.svg'
import 'antd/dist/antd.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        { routes.map((route, index) =>
          <RouteWithSubRoutes key={index} route={route} />
        )}
      </div>
    )
  }
}

export default App
