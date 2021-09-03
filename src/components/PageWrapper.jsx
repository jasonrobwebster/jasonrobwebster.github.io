import React from "react"

import PropTypes from "prop-types"

import FooterBar from "./FooterBar"
import Navbar from "./Navbar"

const PageWrapper = ({ children, ...rest }) => {
  return (
    <React.Fragment>
      <Navbar />
      {children}
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
