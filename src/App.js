import React from "react"

import { HashRouter } from "react-router-dom"
import styled from "styled-components"

import { Navbar } from "./components"
import Pages from "./pages"

const Content = styled.div`
  width: 90%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
`

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Content>
        <Pages />
      </Content>
    </HashRouter>
  )
}

export default App
