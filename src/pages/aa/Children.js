import React from 'react'
import PropTypes from 'prop-types'
export default function PageChildren({ children }) {
  return <>{children}</>
}

PageChildren.propTypes = {
  children: PropTypes.any
}

PageChildren.defaultProps = {
  children: null
}
