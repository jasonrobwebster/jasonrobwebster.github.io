import React from "react"

import PropTypes from "prop-types"

import { HyphenatedText } from "./text"
import PageWrapper from "./PageWrapper"

const ArticleWrapper = ({ children, title, ...rest }) => {
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
