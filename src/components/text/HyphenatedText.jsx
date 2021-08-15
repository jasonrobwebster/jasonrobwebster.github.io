import React from "react"

import enGb from "hyphenated-en-gb"
import Hyphenated from "react-hyphen"
import PropTypes from "prop-types"

const HyphenatedText = ({ children, ...rest }) => {
  return (
    <div {...rest}>
      <Hyphenated lang={enGb}>{children}</Hyphenated>
    </div>
  )
}
HyphenatedText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]).isRequired,
}

export default HyphenatedText
