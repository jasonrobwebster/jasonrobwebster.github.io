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
    margin-bottom: 1.5rem;
    padding: 0 1rem 0;

    background: ${(props) => props.theme.code.bg};
    border-radius: .5rem;

    overflow: hidden;
  }

  pre code {
    color: ${(props) => props.theme.code.color}
    position: relative;
    display: block;

    font-size: 1rem;
    line-height: 1.25em;

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

  /* Prism styles */
  /* from https://github.com/PrismJS/prism-themes/blob/master/themes/prism-vsc-dark-plus.css */

  .namespace {
    opacity: .7;
  }

  .token.doctype .token.doctype-tag {
    color: #569CD6;
  }

  .token.doctype .token.name {
    color: #9cdcfe;
  }

  .token.comment,
  .token.prolog {
    color: #6a9955;
  }

  .token.punctuation,
  .language-html .language-css .token.punctuation,
  .language-html .language-javascript .token.punctuation {
    color: #d4d4d4;
  }

  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.inserted,
  .token.unit {
    color: #b5cea8;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.deleted {
    color: #ce9178;
  }

  .language-css .token.string.url {
    text-decoration: underline;
  }

  .token.operator,
  .token.entity {
    color: #d4d4d4;
  }

  .token.operator.arrow {
    color: #569CD6;
  }

  .token.atrule {
    color: #ce9178;
  }

  .token.atrule .token.rule {
    color: #c586c0;
  }

  .token.atrule .token.url {
    color: #9cdcfe;
  }

  .token.atrule .token.url .token.function {
    color: #dcdcaa;
  }

  .token.atrule .token.url .token.punctuation {
    color: #d4d4d4;
  }

  .token.keyword {
    color: #569CD6;
  }

  .token.keyword.module,
  .token.keyword.control-flow {
    color: #c586c0;
  }

  .token.function,
  .token.function .token.maybe-class-name {
    color: #dcdcaa;
  }

  .token.regex {
    color: #d16969;
  }

  .token.important {
    color: #569cd6;
  }

  .token.italic {
    font-style: italic;
  }

  .token.constant {
    color: #9cdcfe;
  }

  .token.class-name,
  .token.maybe-class-name {
    color: #4ec9b0;
  }

  .token.console {
    color: #9cdcfe;
  }

  .token.parameter {
    color: #9cdcfe;
  }

  .token.interpolation {
    color: #9cdcfe;
  }

  .token.punctuation.interpolation-punctuation {
    color: #569cd6;
  }

  .token.boolean {
    color: #569cd6;
  }

  .token.property,
  .token.variable,
  .token.imports .token.maybe-class-name,
  .token.exports .token.maybe-class-name {
    color: #9cdcfe;
  }

  .token.selector {
    color: #d7ba7d;
  }

  .token.escape {
    color: #d7ba7d;
  }

  .token.tag {
    color: #569cd6;
  }

  .token.tag .token.punctuation {
    color: #808080;
  }

  .token.cdata {
    color: #808080;
  }

  .token.attr-name {
    color: #9cdcfe;
  }

  .token.attr-value,
  .token.attr-value .token.punctuation {
    color: #ce9178;
  }

  .token.attr-value .token.punctuation.attr-equals {
    color: #d4d4d4;
  }

  .token.entity {
    color: #569cd6;
  }

  .token.namespace {
    color: #4ec9b0;
  }
  /*********************************************************
  * Language Specific
  */

  pre[class*="language-javascript"],
  code[class*="language-javascript"],
  pre[class*="language-jsx"],
  code[class*="language-jsx"],
  pre[class*="language-typescript"],
  code[class*="language-typescript"],
  pre[class*="language-tsx"],
  code[class*="language-tsx"] {
    color: #9cdcfe;
  }

  pre[class*="language-css"],
  code[class*="language-css"] {
    color: #ce9178;
  }

  pre[class*="language-html"],
  code[class*="language-html"] {
    color: #d4d4d4;
  }

  .language-regex .token.anchor {
    color: #dcdcaa;
  }

  .language-html .token.punctuation {
    color: #808080;
  }
  /*********************************************************
  * Line highlighting
  */
  pre[data-line] {
    position: relative;
  }

  pre[class*="language-"] > code[class*="language-"] {
    position: relative;
    z-index: 1;
  }

  .line-highlight {
    position: absolute;
    left: 0;
    right: 0;
    padding: inherit 0;
    margin-top: 1em;
    background: #f7ebc6;
    box-shadow: inset 5px 0 0 #f7d87c;
    z-index: 0;
    pointer-events: none;
    line-height: inherit;
    white-space: pre;
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
