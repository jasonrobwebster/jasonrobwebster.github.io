import React, { useEffect, useState } from "react"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&display=swap');

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
    
    &:not(:last-child) {
      margin-bottom: 1em;
    }
  }

  h1 {
    color: ${(props) => props.theme.text.color};

    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.166em;

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

`

function getWindowSize() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

function getBodySize(windowSize) {
  return Math.max(Math.min(windowSize.width * 0.9, 800), 320)
}

function getFontSize(windowSize) {
  const bodySize = getBodySize(windowSize)
  return ((bodySize - 320) / (800 - 320)) * (20 - 16) + 16
}

const GlobalCss = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize())
  const [fontSize, setFontSize] = useState(getFontSize(windowSize))

  useEffect(() => {
    function handleResize() {
      setWindowSize(getWindowSize())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    setFontSize(getFontSize(windowSize))
  }, [windowSize])

  return <GlobalStyle fontSize={`${fontSize}px`} />
}

export default GlobalCss
