import React from 'react'
import PropTypes from 'prop-types'
import {
  MainModal,
  MainContainer,
  ContainerCard,
  CardTitle,
  FlexCard,
  ContainerButton,
  ButtonModal
} from '../ContainerCssModal'
// import semimg from '../../assets/images/semimg.svg'
import close from '../../assets/images/close.svg'

export default function LoadModal({ id = 'loadmodal', titulo = '', onClose = () => {}, children }) {
  const handleCloseModal = e => {
    if (e.target.id === id) onClose()
  }
  return (
    <MainModal id={id} onClick={handleCloseModal}>
      <MainContainer>
        <ContainerCard>
          <FlexCard>
            <CardTitle>{titulo}</CardTitle>
            <ContainerButton>
              {/* <ButtonClouseModal img={semimg} onClick={() => {}} /> */}
              <ButtonModal img={close} onClick={onClose} />
            </ContainerButton>
          </FlexCard>
        </ContainerCard>
        {children}
      </MainContainer>
    </MainModal>
  )
}

LoadModal.propTypes = {
  id: PropTypes.string,
  titulo: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.any
}

LoadModal.defaultProps = {
  children: null
}
