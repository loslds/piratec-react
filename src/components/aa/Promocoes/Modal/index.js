import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { MainModal, MainContainer, ContainerCard, FlexCard } from '../../ContainerCssModal'
import Title from './Title'
import Buttons from './Buttons'

export default function Modal({ title, onCloseModal, children, isOpen }) {
  // ...
  const handleClose = useCallback(
    e => {
      e.stopPropagation()
      onCloseModal()
    },
    [onCloseModal]
  )

  return (
    <MainModal onClick={handleClose} isOpen={isOpen}>
      <MainContainer
        onClick={e => {
          e.stopPropagation()
        }}
      >
        <ContainerCard>
          <FlexCard>
            <Title title={title} />
            <Buttons onClick={handleClose} />
          </FlexCard>
        </ContainerCard>
        {children}
      </MainContainer>
    </MainModal>
  )
}

Modal.propTypes = {
  title: PropTypes.string,
  onCloseModal: PropTypes.func,
  children: PropTypes.any,
  isOpen: PropTypes.bool
}

Modal.defaultProps = {
  title: '--',
  onCloseModal: () => {},
  children: null,
  isOpen: false
}
