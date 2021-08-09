import React from "react"

import ReactDOM from "react-dom"
import { ThemeProvider } from "styled-components"

import App from "./App"
import defaultTheme from "./shared/theme"
import { GlobalCss } from "./components"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("app")
)
