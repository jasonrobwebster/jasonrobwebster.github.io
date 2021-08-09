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
  children: PropTypes.element.isRequired,
}

export default HyphenatedText
