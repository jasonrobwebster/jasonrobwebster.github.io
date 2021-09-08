module.exports = {
  siteMetadata: {
    siteUrl: "https://jasonrobwebster.github.io",
    title: "jasonrobwebster.github.io",
    titleTemplate: "%s - jasonrobwebster.github.io",
    description: "Blog on tech, data science, maths, and other things.",
    image: "/images/logo.png",
    imageAlt: "The letter J on a dark background",
    twitterUsername: "@jasonrobwebster",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:400,700,900,400i,700i,900i", "Ubuntu Mono:400"],
        display: "swap",
      },
    },
  ],
}
