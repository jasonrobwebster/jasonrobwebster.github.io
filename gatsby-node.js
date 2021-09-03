const path = require("path")

const blogs = require("./src/blogs")

module.exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/BlogArticle.jsx")

  blogs.forEach((blog) => {
    const slug = blog.slug
    const path = `/blog/${slug}`
    createPage({
      path,
      component: blogTemplate,
      context: {
        renderString: blog.renderString,
        lastUpdated: blog.lastUpdated,
      },
    })
  })
}
