import React from "react"

import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"

const Seo = ({ title, description, image, imageAlt, article }) => {
  const pathname = useLocation()
  const site = useStaticQuery(query)

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    defaultImageAlt,
    twitterUsername,
  } = site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    titleTemplate: title ? titleTemplate : "",
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    imageAlt: imageAlt || defaultImageAlt,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:image:alt" content={seo.imageAlt} />
      {article && <meta property="og:type" content="article" />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.imageAlt} />
    </Helmet>
  )
}

export default Seo

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
  article: PropTypes.bool,
}

Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  imageAlt: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
        defaultImage: image
        defaultImageAlt: imageAlt
        twitterUsername
      }
    }
  }
`
