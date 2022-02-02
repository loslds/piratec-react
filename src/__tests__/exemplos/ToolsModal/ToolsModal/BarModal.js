import React from 'react'
import PropTypes from 'prop-types'
import { ContainerTageta, FlexTageta } from './styles'

export default function BarModal({ children }) {
  return (
    <ContainerTageta>
      <FlexTageta>{children}</FlexTageta>
    </ContainerTageta>
  )
}

BarModal.propTypes = {
  children: PropTypes.any
}

BarModal.defaultProps = {
  children: null
}
