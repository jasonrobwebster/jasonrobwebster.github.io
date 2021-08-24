import React from "react"

import PropTypes from "prop-types"

const A = ({ children, ...props }) => {
  return (
    <a {...props} target="_blank">
      {children}
    </a>
  )
}
A.propTypes = { children: PropTypes.string.isRequired }

export default A
