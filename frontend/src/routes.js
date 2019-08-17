import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home'
import Cart from './pages/Cart'

// import { Container } from './styles';

export default function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/cart' component={Cart} />
    </Switch>
  )
}
