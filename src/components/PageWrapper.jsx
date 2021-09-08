import React from "react"

import PropTypes from "prop-types"

import FooterBar from "./FooterBar"
import Navbar from "./Navbar"
import Seo from "./Seo"
import PageContent from "../shared/styles/PageContent"

const PageWrapper = ({ children, maxWidth, lastUpdated, ...seo }) => {
  return (
    <React.Fragment>
      <Seo {...seo} />
      <Navbar />
      <PageContent maxWidth={maxWidth}>{children}</PageContent>
      <FooterBar lastUpdated={lastUpdated} />
    </React.Fragment>
  )
}
PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
  maxWidth: PropTypes.string,
  lastUpdated: PropTypes.instanceOf(Date),
}

export default PageWrapper
