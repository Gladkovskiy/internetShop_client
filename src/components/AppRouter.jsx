import {observer} from 'mobx-react-lite'
import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import {authRoutes, publicRoutes} from '../routes'
import {SHOP_ROUTE} from '../utils/consts'
import user from '../store/UserStore'

const AppRouter = observer(() => {
  return (
    <Switch>
      {user.isAuth &&
        authRoutes.map(({path, Component}) => (
          <Route key={path} path={path} component={Component} exact />
        ))}
      {publicRoutes.map(({path, Component}) => (
        <Route key={path} path={path} component={Component} exact />
      ))}
      <Redirect to={SHOP_ROUTE} />
    </Switch>
  )
})

export default AppRouter
