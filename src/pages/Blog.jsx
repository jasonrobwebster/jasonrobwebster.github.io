import React from "react"

import styled from "styled-components"
import { Route, Switch, useParams, useRouteMatch } from "react-router-dom"

import BlogCard from "../components/BlogCard"
import blogs from "./blogs"
import device from "../shared/devices"

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

const Article = () => {
  const { slug } = useParams()
  const blog = blogs.find(
    (blog) => blog.slug === slug && isProduction && blog.published === true
  )
  const blogComponent = blog.component
  return <React.Fragment>{React.createElement(blogComponent)}</React.Fragment>
}

const Blog = () => {
  const { path } = useRouteMatch()
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={path}>
          <CardContent>
            <BlogCard
              title="Building this blog 1"
              imageLink="images/jason.jpg"
              description="Testing"
              tag="Tech"
            />
            <BlogCard
              title="Building this blog 2"
              imageLink="./images/jason.jpg"
              description="Testing"
              tag="Tech"
            />
            <BlogCard
              title="Building this blog 3"
              imageLink="./images/jason.jpg"
              description="Testing"
              tag="Tech"
            />
            <BlogCard
              title="Building this blog 4"
              imageLink="./images/jason.jpg"
              description="Testing"
              tag="Tech"
            />
            <BlogCard
              title="Building this blog 5"
              imageLink="./images/jason.jpg"
              description="Testing"
              tag="Tech"
            />
          </CardContent>
        </Route>
        <Route path={`${path}/:slug`}>
          <Article />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default Blog
