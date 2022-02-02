import React from 'react'
import PropTypes from 'prop-types'
import { ColButton, ContanerButton } from './styles'

export default function BarButtonModal({ children }) {
  return (
    <ColButton>
      <ContanerButton>{children}</ContanerButton>
    </ColButton>
  )
}

BarButtonModal.propTypes = {
  children: PropTypes.any
}

BarButtonModal.defaultProps = {
  children: null
}
