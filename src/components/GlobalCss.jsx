import React, { useEffect, useRef, useState } from "react"

import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

const GlobalCss = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [fontSize, setFontSize] = useState(getFontSize(windowSize))

  if (isBrowser) {
    useEffect(() => {
      function handleResize() {
        setWindowSize(getWindowSize())
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
  }

  useEffect(() => {
    setFontSize(getFontSize(windowSize))
  }, [windowSize])

  return <GlobalStyle fontSize={`${fontSize}px`} />
}

export default GlobalCss

const isBrowser = typeof window !== "undefined"

const GlobalStyle = createGlobalStyle`
  ${reset}

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    background-color: ${(props) => props.theme.bg};
    font-family: 'Roboto', sans-serif;
    font-size: ${(props) => props.fontSize};
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  p {
    color: ${(props) => props.theme.text.color};

    font-size: 1rem;
    line-height: 1.25em;
    text-align: justify;

    padding-bottom: 1em;
    
    &:last-child {
      padding-bottom: 0;
    }
  }

  h1 {
    color: ${(props) => props.theme.text.color};

    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.166em;

    padding-bottom: 1.5rem;
  }

  h2 {
    color: ${(props) => props.theme.text.color};

    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.166em;

    padding-bottom: 1rem;
    
    &:last-child {
      padding-bottom: 0;
    }
  }

`

function getWindowSize() {
  return {
    width: isBrowser ? window.innerWidth : 1440,
    height: isBrowser ? window.innerHeight : 900,
  }
}

function getBodySize(windowSize) {
  return Math.max(Math.min(windowSize.width * 0.9, 800), 320)
}

function getFontSize(windowSize) {
  const bodySize = getBodySize(windowSize)
  return ((bodySize - 320) / (800 - 320)) * (20 - 16) + 16
}
