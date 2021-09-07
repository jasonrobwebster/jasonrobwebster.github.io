import React from "react"

import PropTypes from "prop-types"

import FooterBar from "./FooterBar"
import Navbar from "./Navbar"
import PageContent from "../shared/styles/PageContent"

const PageWrapper = ({ children, maxWidth, ...rest }) => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContent maxWidth={maxWidth}>{children}</PageContent>
      <FooterBar {...rest} />
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
}

export default PageWrapper
