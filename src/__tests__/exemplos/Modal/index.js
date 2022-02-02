import React from 'react'
import PropTypes from 'prop-types'
import {
  MainModal,
  MainContainer,
  ContainerCard,
  FlexCard,
  CardTitle,
  ContainerButton,
  ButtonModal
} from '../../../components/ContainerCssModal'
// import semimg from '../../assets/images/semimg.svg'
import close from '../../assets/images/close.svg'
export default function Modal({
  idref = '',
  titulo = '',
  onClose = () => {},
  reff = '',
  children
}) {
  const handleOutsideClick = e => {
    if (e.target.id === idref) onClose()
  }
  return (
    <MainModal id={idref} onClick={handleOutsideClick}>
      <MainContainer>
        <ContainerCard>
          <FlexCard>
            <CardTitle>{titulo}</CardTitle>
            <ContainerButton>
              {/* <ButtonModal img={semimg} onClick={onClose} /> */}
              <ButtonModal img={close} onClick={onClose} />
            </ContainerButton>
          </FlexCard>
        </ContainerCard>
        {children}
      </MainContainer>
    </MainModal>
  )
}

Modal.propTypes = {
  idref: PropTypes.string,
  titulo: PropTypes.string,
  onClose: PropTypes.func,
  reff: PropTypes.func,
  children: PropTypes.any
}

Modal.defaultProps = {
  reff: null,
  children: null
}
