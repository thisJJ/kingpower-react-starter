import React from 'react'
import { Route } from 'react-router-dom'

export default function RouteWithSubRoutes({ route }) {
  return (
    <Route
      path={route.path}
      render={routeProps => (
        // pass the sub-routes down to keep nesting
        <route.component {...routeProps} routes={route.routes} />
      )}
    />
  )
}
