import React from 'react'
import PropTypes from 'prop-types'
import {
  BarContainer,
  BarFlex,
  BarColLeft,
  BarColHidth,
  ImagesContainer,
  ImgSys,
  ImgEmp
} from '../ContainerCss'
import MenuPri from '../MenuPri'
import logoSys from '../../assets/images/logosys.png'
import logoEmp from '../../assets/images/logoemp.svg'
export default function AppBar(props) {
  const { color } = props

  return (
    <BarContainer color={color}>
      <BarFlex>
        <BarColLeft>
          <ImagesContainer>
            <ImgSys src={logoSys} alt="Grupo Piratec" title="Grupo Piratec" />
            <ImgEmp src={logoEmp} alt="Logo Empresa" title="Logo Empresa" />
          </ImagesContainer>
        </BarColLeft>
        <BarColHidth>
          <MenuPri />
        </BarColHidth>
      </BarFlex>
    </BarContainer>
  )
}

AppBar.defaultProps = {
  color: 'transparent'
}

AppBar.propTypes = {
  color: PropTypes.string
}
