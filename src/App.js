import React from "react"

import { HashRouter } from "react-router-dom"

import { Navbar } from "./components"
import Pages from "./pages"

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Pages />
    </HashRouter>
  )
}

export default App
