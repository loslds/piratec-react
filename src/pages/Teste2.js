import React, { useState, useCallback } from 'react'
// import PropTypes from 'prop-types'
// import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { BarContainer, BarFlex } from '../components/ContainerCss'
import LoadModal from '../components/LoadModal'

const ButtonCallModal = styled.button`
  border: 2px white solid; /*transparent;*/
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  padding: 2px auto;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: transparent;
  background-color: #58b0f8;
  cursor: pointer;
  outline: none;
`

export default function PageTeste2() {
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
          <LoadModal titulo={<h3>Titulo</h3>} onClose={handleSendClickModal}>
            {<p> Local de chamada de outro Componente Filho. Através do Componente LoadModal.</p>}
          </LoadModal>
        ) : null}
      </BarFlex>
    </BarContainer>
  )
}

// const [isVisibled, setIsVisibled] = useState(false)
// const [isClose, setIsClose] = useState(true)
// const [isActive, setIsActive] = useState(false)

// const handleToggleState = useCallback(() => setIsVisibled(oldState => !oldState), [])
// const handleIn = useCallback(() => setIsActive(true), [])
// const handleOut = useCallback(() => setIsActive(false), [])

//   const router = useHistory()
//   const handleClickAbort = useCallback(() => {
//     router.push('/')
//   }, [router])

//   return (
//     <BarContainer>
//       <BarFlex>
//         <ButtonChamePage
//           label="Acesso ao Modal"
//           onClick={handleToggleState}
//           onClose={handleClickAbort}
//         >
//           {!isVisibled ? 'Abrir' : 'Fechar'}
//         </ButtonChamePage>
//         {handleToggleState ? (
//           <LoadModal titulo={<h3>PaginaModalTeste1</h3>} onClose={handleToggleState}>
//             <CheckBox1 label="Selecione uma Opção : " />
//           </LoadModal>
//         ) : null}
//       </BarFlex>
//     </BarContainer>
//   )
// }

/** =========== modelo chama modal
PageTeste2.protoType = {
  id: PropTypes.string,
  label: PropTypes.string
}

PageTeste2.defaultProps = {
  id: 'menu',
  label: null
}
*/
/** =========== modelo chama modal
<Modal onClick={() => isVisibleClick(false)}>
<ModalMain>
  <BarMain>

  </BarMain>
</ModalMain>
{colocar a pagina que enviei como children.}
</Modal> */
