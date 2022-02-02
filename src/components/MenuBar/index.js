import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
// import { useLocation } from 'react-router-dom'
import menu from '../../assets/images/menu.png'

import { BtnMnBarImg, ImgMnMan, MnBarContainer, MnBarFlex, MnBarImgMn } from './styles'

function MenuTeste(props) {
  const { sinal } = props
  if (sinal) {
    return <div>Verdadeiro</div>
  }
  return <div>Falso</div>
}

MenuTeste.defaultProps = {
  sinal: false
}

MenuTeste.propTypes = {
  sinal: PropTypes.bool
}

export default function MenuBar(props) {
  const { color } = props
  const [state, setState] = useState(true)
  // const location = useLocation()
  // const match = useRouteMatch

  // console.log('location', location.pathname)

  const handleToggleState = useCallback(() => {
    setState(oldState => {
      return !oldState
    })
  }, [])

  return (
    <MnBarContainer color={color}>
      <div>
        <MnBarFlex>
          <MnBarImgMn>
            <BtnMnBarImg onClick={handleToggleState}>
              <div>
                <ImgMnMan src={menu} alt="MENU" title="MENU" />
              </div>
              <MenuTeste sinal={state} />
            </BtnMnBarImg>
          </MnBarImgMn>
        </MnBarFlex>
      </div>
    </MnBarContainer>
  )
}
MenuBar.defaultProps = {
  color: 'transparent'
}

MenuBar.propTypes = {
  color: PropTypes.string
}
