import React from "react"

import defaultTheme from "./shared/theme"
import { HashRouter } from "react-router-dom"
import styled, { createGlobalStyle, ThemeProvider } from "styled-components"

import { Navbar } from "./components"
import Pages from "./pages"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${(props) => props.theme.bg};

    margin: 0;

    font-family: 'Roboto', sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

const Content = styled.div`
  width: 90%;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 50px;
`

const App = () => {
  return (
    <HashRouter>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Navbar />
        <Content>
          <Pages />
        </Content>
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
