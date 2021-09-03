const config = {
  siteMetadata: {
    siteUrl: "https://jasonrobwebster.github.io",
    title: "jasonrobwebster",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Roboto:400,700,900,400i,700i,900i"],
        display: "swap",
      },
    },
  ],
}

export default config
