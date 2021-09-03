import React from "react"

import fp from "lodash/fp"
import styled from "styled-components"

import blogs from "../blogs"
import device from "../shared/devices"
import { PageContent } from "../shared/styles"
import { BlogCard, FooterBar, PageWrapper } from "../components"

const isProduction = process.env.NODE_ENV === "production"

const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  & > * {
    margin-right: 2rem;
    margin-left: 2rem;
    margin-bottom: 2rem;
  }

  @media (${device.tablet}) {
    justify-content: left;
    & > :nth-child(2n + 1) {
      margin-left: calc((100% - 2 * 12.5rem) / 3);
      margin-right: calc((100% - 2 * 12.5rem) / 6);
    }

    & > :nth-child(2n + 2) {
      margin-left: calc((100% - 2 * 12.5rem) / 6);
      margin-right: calc((100% - 2 * 12.5rem) / 3);
    }
  }

  @media (${device.desktop}) {
    & > :nth-child(3n + 1) {
      margin-left: 0;
      margin-right: calc((100% - 3 * 12.5rem) / 4);
    }
    & > :nth-child(3n + 2) {
      margin-left: calc((100% - 3 * 12.5rem) / 4);
      margin-right: calc((100% - 3 * 12.5rem) / 4);
    }

    & > :nth-child(3n + 3) {
      margin-left: calc((100% - 3 * 12.5rem) / 4);
      margin-right: 0;
    }
  }
`

function findBlogBySlug(slug) {
  return blogs.find((blog) => blog.slug === slug)
}

const Article = () => {
  const { slug } = useParams()
  const blog = findBlogBySlug(slug)
  const blogComponent = blog.component
  return (
    <React.Fragment>
      <PageContent>{React.createElement(blogComponent)}</PageContent>
      <FooterBar lastUpdated={blog.lastUpdated} />
    </React.Fragment>
  )
}

const Blog = ({ location }) => {
  const publishedBlogs = fp.filter((blog) =>
    isProduction ? blog.published : true
  )(blogs)
  const lastBlog = fp.maxBy((blog) => blog.lastUpdated)(publishedBlogs)

  return (
    <React.Fragment>
      <PageWrapper lastUpdated={lastBlog ? lastBlog.lastUpdated : null}>
        <PageContent>
          <CardContent>
            {fp.flow(
              fp.sortBy((blog) => -(blog.lastUpdated || new Date())),
              fp.map((blog) => (
                <BlogCard
                  key={blog.slug}
                  url={`${location.pathname}/${blog.slug}`}
                  title={blog.title}
                  imageLink={blog.image}
                  description={blog.description}
                  tag={blog.tag}
                />
              ))
            )(publishedBlogs)}
          </CardContent>
        </PageContent>
      </PageWrapper>
    </React.Fragment>
  )
}

export default Blog
