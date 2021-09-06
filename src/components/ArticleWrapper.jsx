import React, { useEffect } from "react"

import PropTypes from "prop-types"

import highlightCode from "../shared/utils/highlightCode"
import { HyphenatedText } from "./text"
import PageWrapper from "./PageWrapper"

const ArticleWrapper = ({ children, title, ...rest }) => {
  useEffect(() => {
    highlightCode()
  })
  return (
    <PageWrapper {...rest}>
      <article className="Blog__Content">
        <HyphenatedText>{children}</HyphenatedText>
      </article>
    </PageWrapper>
  )
}

export default ArticleWrapper

ArticleWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
}
