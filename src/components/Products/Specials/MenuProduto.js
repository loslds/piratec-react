import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import semimg from '../../../assets/images/semimg.svg'
import mnmain from '../../../assets/images/menuprod.svg'

const MenuContainer = styled.div`
  border: 1px red solid;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 200px;
  padding: 10px 10px 10px 10px;
  margin: 5px 10px 5px 10px;
  z-index: 20;
  background-color: rgba(101, 193, 250, 0.9);
  display: flex;
`
const ContainerNav = styled.div`
  border: 2px white solid;
  border-radius: 10px;

  padding: 5px auto;
  margin: 0px auto;
  min-width: 90%;
  display: flex row;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: rgba(101, 193, 250, 1);
  color: #000000;
  font-size: 16px;
  font-family: 'Stencil';
`
// const LabelButton = styled.div`
//   border: 1px red dashed;
//   padding: 0px auto;
//   margin: 0px auto;
//   display: block;
// `

const ButtonMenuMain = styled.button`
  border: none;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  width: 40px;
  height: 40px;

  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  display: block;
  overflow-x: hidden;
  color: #000000;
  font-size: 16px;
  font-family: 'Stencil';
`
const ContainerButton = styled.div`
  padding: 5px auto;
  margin: 0px auto;
  width: 100%;
  display: flex;
  flex-flow: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${props => {
    if (props.isClose && !props.isActive) {
      return css`
          background-color: #9cddfe;
          border: 1px red solid;
          border-radius: 10px;
        }
      `
    }
    return css`
      background-color: #00f;
      border: 1px black solid;
      border-radius: 10px;
    `
  }}
  div {
    padding: 5px auto;
    margin: 0px auto;
  } ;
`

export default function MenuProduto({ id = 'menu', label = 'MENU' }) {
  const [isClose, setIsClose] = useState(true)
  const [isActive, setIsActive] = useState(false)

  const handleToggleState = useCallback(() => setIsClose(oldState => !oldState), [])
  const handleIn = useCallback(() => setIsActive(true), [])
  const handleOut = useCallback(() => setIsActive(false), [])

  return (
    <MenuContainer>
      <ContainerNav>
        <nav>
          <ContainerButton id={id} label={label} isClose={isClose} isActive={isActive}>
            <ButtonMenuMain
              img={mnmain}
              title={'Menu'}
              onClick={handleToggleState}
              onMouseOver={handleIn}
              onMouseOut={handleOut}
            />
          </ContainerButton>

          <ul>
            <li>grupo01</li>
          </ul>
        </nav>
      </ContainerNav>
    </MenuContainer>
  )
}

MenuProduto.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
}

MenuProduto.defaultProps = {
  id: 'menu',
  label: null
}
