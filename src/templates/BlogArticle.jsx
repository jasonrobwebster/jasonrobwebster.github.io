import React from "react"

import PropTypes from "prop-types"

import { PageWrapper } from "../components"

const BlogArticle = ({ pageContext }) => {
  const { renderString, lastUpdated } = pageContext
  return (
    <React.Fragment>
      <PageWrapper lastUpdated={lastUpdated}>
        <div
          className="Blog__Content"
          dangerouslySetInnerHTML={{ __html: renderString }}
        />
      </PageWrapper>
    </React.Fragment>
  )
}

export default BlogArticle
