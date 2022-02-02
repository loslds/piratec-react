import React from 'react'
import PropTypes from 'prop-types'
import { CardSelectList } from './style'

export default function SelectList({ children }) {
  return <CardSelectList>{children}</CardSelectList>
}

SelectList.propTypes = {
  children: PropTypes.any
}

SelectList.defaultProps = {
  children: null
}
