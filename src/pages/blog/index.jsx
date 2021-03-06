import React from "react"

import fp from "lodash/fp"
import styled from "styled-components"

import device from "../../shared/devices"
import { BlogCard, PageWrapper } from "../../components"

const Blog = () => {
  const publishedBlogs = fp.filter((blog) =>
    isProduction ? blog.published : true
  )(blogs)
  const lastBlog = fp.maxBy((blog) => blog.lastUpdated)(blogs)

  return (
    <React.Fragment>
      <PageWrapper
        lastUpdated={lastBlog.lastUpdated}
        title="Blog"
        maxWidth="800px"
      >
        <CardContent>
          {fp.flow(
            fp.sortBy((blog) => -(blog.lastUpdated || new Date())),
            fp.map((blog) => (
              <BlogCard
                key={blog.slug}
                url={blog.slug}
                title={blog.title}
                imageLink={blog.image}
                imageAlt={blog.imageAlt}
                description={blog.description}
                tag={blog.tag}
              />
            ))
          )(publishedBlogs)}
        </CardContent>
      </PageWrapper>
    </React.Fragment>
  )
}

export default Blog

// blog card datastore
const blogs = [
  {
    title: "Build­ing an in­ter­ac­tive blog with Re­act and Gats­by JS",
    description: "How I built a personal blog with React and Gatsby JS.",
    tag: "Tech",
    slug: "building-an-interactive-personal-blog",
    image: "/images/blog.png",
    imageAlt: "A blog post",
    published: true,
    lastUpdated: new Date(2021, 8, 7),
  },
]

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

  @media ${device.tablet} {
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

  @media ${device.desktop} {
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
