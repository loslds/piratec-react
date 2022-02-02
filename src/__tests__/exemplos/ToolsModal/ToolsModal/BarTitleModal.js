import React from 'react'
import PropTypes from 'prop-types'
import { ColTituloTageta } from './styles'

export default function BarTitleModal({ children }) {
  return <ColTituloTageta>{children}</ColTituloTageta>
}

BarTitleModal.propTypes = {
  children: PropTypes.any
}

BarTitleModal.defaultProps = {
  children: null
}
