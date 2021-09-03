import React from "react"

import PropTypes from "prop-types"

import FooterBar from "./FooterBar"
import Navbar from "./Navbar"
import PageContent from "../shared/styles/PageContent"

const PageWrapper = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <Navbar />
      <PageContent>{children}</PageContent>
      <FooterBar {...rest} />
    </React.Fragment>
  )
}
PageWrapper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
}

export default PageWrapper
