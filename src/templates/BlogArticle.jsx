import React from "react"

import PropTypes from "prop-types"

import blogs from "../blogs"
import { PageWrapper } from "../components"

function findBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug)
}

const BlogArticle = ({ slug }) => {
  const blog = findBlogBySlug(slug)
  const blogComponent = blog.component
  return (
    <React.Fragment>
      <PageWrapper lastUpdated={blog.lastUpdated}>
        {React.createElement(blogComponent)}
      </PageWrapper>
    </React.Fragment>
  )
}
BlogArticle.propTypes = {
  slug: PropTypes.string.isRequired,
}

export default BlogArticle
