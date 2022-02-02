import React from 'react'
import styled from 'styled-components'
import semimg from '../../../assets/images/semimg.svg'
import sendenvia from '../../../assets/images/sendenvia.png'

const ContainerButtonSend = styled.div`
  border: 0px;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  color: black;
  font-size: 18px;
  display: flex;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  align-content: center;
`

const ButtonSendFlex = styled.div`
  border: 0px;
  padding: 0px auto;
  margin-bottom: 10px;
  min-width: 10%;
  display: flex;
  flex-flow: row wrap;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  align-content: center;
`
const ImagemButtonSend = styled.div`
  border: 0px;
  margin: 0px auto;
  padding: 0px auto;
  display: flex;
  width: 150px;
  height: 40px;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  outline: none;
  background-color: rgba(88, 176, 248, 1);
`
const ButtonSend = styled.button`
  margin: 0px auto;
  padding: 0px auto;
  display: block;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: pointer;
  /* outline: none; */
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

export default function ButtonFilter() {
  return (
    <ContainerButtonSend>
      <ButtonSendFlex>
        <ImagemButtonSend>
          <ButtonSend img={sendenvia} />
        </ImagemButtonSend>
      </ButtonSendFlex>
    </ContainerButtonSend>
  )
}

// ButtonFilter.propTypes = {
//   color: PropTypes.string
// }

// ButtonFilter.defaultProps = {
//   color: 'transparent'
// }
