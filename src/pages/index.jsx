import React from "react"

import { Route, Switch } from "react-router-dom"

import Blog from "./Blog"
import Contact from "./Contact"
import Home from "./Home"
import Tools from "./Tools"

const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blog" component={Blog} />
      <Route path="/tools" component={Tools} />
      <Route path="/contact" component={Contact} />
    </Switch>
  )
}

export default Pages
