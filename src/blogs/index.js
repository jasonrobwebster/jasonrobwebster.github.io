import React from "react"
import ReactDOMServer from "react-dom/server"

require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
})
const BuildingMyOwnBlog = require("./BuildingMyOwnBlog")

function renderComponent(component) {
  component = component.default || component
  return ReactDOMServer.renderToString(React.createElement(component))
}

const blogs = [
  {
    title: "Building a personal blog",
    description: "How I built this blog using React, .",
    tag: "Tech",
    slug: "building-a-personal-blog",
    component: BuildingMyOwnBlog,
    renderString: renderComponent(BuildingMyOwnBlog),
    image: "blog.png",
    lastUpdated: new Date(2021, 7, 15),
    published: false,
  },
]

export default blogs
