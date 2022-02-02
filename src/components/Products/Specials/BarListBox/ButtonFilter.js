import React from 'react'
import { ContainerButtonSend, ButtonSendFlex, ImagemButtonSend, ButtonSend } from './style'
import sendenvia from '../../../../assets/images/sendenvia.png'

export default function ButtonFilter(props) {
  return (
    <ContainerButtonSend>
      <ButtonSendFlex>
        <ImagemButtonSend>
          <ButtonSend img={sendenvia} {...props} />
        </ImagemButtonSend>
      </ButtonSendFlex>
    </ContainerButtonSend>
  )
}
