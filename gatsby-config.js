module.exports = {
  siteMetadata: {
    siteUrl: "https://jasonrobwebster.github.io",
    title: "jasonrobwebster",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:400,700,900,400i,700i,900i", "Ubuntu Mono:400"],
        display: "swap",
      },
    },
  ],
}
