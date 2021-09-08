import React, { useEffect } from "react"

import PropTypes from "prop-types"

import highlightCode from "../shared/utils/highlightCode"
import { HyphenatedText } from "./text"
import PageWrapper from "./PageWrapper"

const ArticleWrapper = ({ children, lastUpdated, ...seo }) => {
  useEffect(() => {
    highlightCode()
  })
  return (
    <PageWrapper lastUpdated={lastUpdated} article={true} {...seo}>
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
  lastUpdated: PropTypes.instanceOf(Date),
}
