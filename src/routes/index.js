import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { routeList } from './routeList'

function RouteWithSubRoutes(route) {
  const logged = true

  function BuildRoute(p) {
    const { component: Component, layout: Layout, privated } = p

    if (!logged && privated) return <Redirect to="/" />

    return (
      <Layout>
        <Component {...p} />
      </Layout>
    )
  }
  return (
    <Route
      exact={!!route.exact}
      path={route.path}
      render={prop => <BuildRoute {...prop} {...route} />}
    />
  )
}

export default function MainRouter() {
  const routes = [...routeList]

  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => {
          const key = `route-${i}`
          return <RouteWithSubRoutes key={key} {...route} />
        })}
      </Switch>
    </BrowserRouter>
  )
}
