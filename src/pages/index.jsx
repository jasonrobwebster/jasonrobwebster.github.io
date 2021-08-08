import React from "react"

import { Route, Switch } from "react-router-dom"

const Pages = () => {
  return (
    <Switch>
      <Route path="/" exact>
        Home
      </Route>
      <Route path="/blog">Blog</Route>
      <Route path="/tools">Tools</Route>
      <Route path="/contact">Contact</Route>
    </Switch>
  )
}

export default Pages
