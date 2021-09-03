import React from "react"

import { ThemeProvider } from "styled-components"

import defaultTheme from "./src/shared/theme"
import { GlobalCss } from "./src/components"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalCss />
      {element}
    </ThemeProvider>
  )
}
