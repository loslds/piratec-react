import React from 'react'
import PropTypes from 'prop-types'
import { ContainerModal, FlexModal } from './styles'

export default function MainModal({ children }) {
  return (
    <ContainerModal>
      <FlexModal>{children}</FlexModal>
    </ContainerModal>
  )
}

MainModal.propTypes = {
  children: PropTypes.any
}

MainModal.defaultProps = {
  children: null
}
