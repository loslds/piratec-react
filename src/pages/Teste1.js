import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'
import { BarContainer, BarFlex, ButtonCallModal } from '../components/ContainerCss'
import LoadModal from '../components/LoadModal'
export default function PageTeste1() {
  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const handleSendClickModal = useCallback(() => {
    setIsVisibleModal(oldState => {
      return !oldState
    })
  }, [])

  return (
    <BarContainer>
      <BarFlex>
        <ButtonCallModal onClick={handleSendClickModal}>Chama Modal</ButtonCallModal>
        {isVisibleModal ? (
          <LoadModal titulo={<h3> LoadModal Teste1</h3>} onClose={handleSendClickModal}>
            {<h3>estou em Modal teste 1</h3>}
          </LoadModal>
        ) : null}
      </BarFlex>
    </BarContainer>
  )
}
