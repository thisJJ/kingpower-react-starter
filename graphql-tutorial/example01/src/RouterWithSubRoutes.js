import React from 'react'
import { Route } from 'react-router-dom'

function RouteWithSubRoutes({ route }) {
  
  return (
    <Route
      path={route.path}
      render={routeProps => {
        console.log('RouteWithSubRoutes', routeProps)
        return(
        // pass the sub-routes down to keep nesting
        <route.component {...routeProps} routes={route.routes} />
      )}}
    />
  )
}

export default ({ routes }) => {
  return routes.map((route, index) =>
    <RouteWithSubRoutes key={index} route={route} />
  )
}