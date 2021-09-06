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
  }

  code {
    font-family: 'Monaco', 'Consolas', 'Ubuntu Mono', monospace;
    font-size: inherit;
    color: ${(props) => props.theme.code.color}
  }

  pre {
    display: block;
    width: 100%;
    margin-top: .75rem;
    margin-bottom: 1.25rem;
    padding: 0 1rem 0;

    background: ${(props) => props.theme.code.bg};
    border-radius: .5rem;

    overflow: hidden;
  }

  pre code {
    position: relative;
    display: block;

    font-size: 0.9rem;
    line-height: 1.25rem;

    page-break-inside: avoid;
    word-wrap: break-word;

    scrollbar-width: thin;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;

    padding: .75rem 0;
  }

  p > code {
    color: ${(props) => props.theme.text.code};
    background: ${(props) => props.theme.text.codeBg};
    word-wrap: break-word;
    box-decoration-break: clone;
    padding: .1rem .3rem .2rem;
    border-radius: .2rem;
  }

  h1 {
    color: ${(props) => props.theme.text.color};

    font-size: 2.4rem;
    font-weight: bold;
    line-height: 1.166em;
    text-align: center;

    padding-bottom: 1.5rem;
  }

  h2 {
    color: ${(props) => props.theme.text.color};

    font-size: 1.6rem;
    font-weight: bold;
    line-height: 1.166em;

    padding-bottom: 1rem;
  }

  ol {
    list-style: none;
    counter-reset: my-counter;
    
    font-size: 1rem;
    line-height: 1.25em;
    text-align: justify;

    padding-bottom: 1em;
    padding-left: 2.5em;
    
    &:last-child {
      padding-bottom: 0;
    }
  }

  ol li {
    position: relative;

    counter-increment: my-counter;
    padding-bottom: 0.5em;

    &:last-child {
      padding-bottom: 0;
    }
  }

  ol li::before {
    content: counter(my-counter)".";

    position: absolute;
    left: -1.5em;
  }
`

function getWindowSize() {
  return {
    width: isBrowser ? window.innerWidth : 1440,
    height: isBrowser ? window.innerHeight : 900,
  }
}

function getBodySize(windowSize) {
  return Math.max(Math.min(windowSize.width * 0.9, 630), 320)
}

function getFontSize(windowSize) {
  const bodySize = getBodySize(windowSize)
  return ((bodySize - 320) / (630 - 320)) * (20 - 16) + 16
}
