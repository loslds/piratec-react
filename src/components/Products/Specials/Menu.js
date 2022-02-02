import React, { useCallback } from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import semimg from '../../../assets/images/semimg.svg'
import mnmain from '../../../assets/images/menuprod.svg'

const MenuContainer = styled.div`
  border: 1px black solid;
  position: fixed;
  left: 0px;
  top: 0px;
  min-height: 50px;
  min-width: 10%;
  padding: 3px 10px 3px 10px;
  margin: 5px 10px 5px 10px;
  z-index: 20;
  display: flex;
  background-color: rgba(101, 193, 250, 0.9);
  justify-content: center;
  align-items: center;
`

const MenuFlex = styled.div`
  border: 3px white solid;
  padding: 0 auto;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  min-height: 100%;
  color: white;
  font-size: 16px;
  font-family: 'Stencil';
  display: flex;
  background-color: black;
  flex-flow: nowrap;
  justify-content: center;
  align-items: center;
  div {
    padding: 4px;
  }
  @media (max-width: 540px) {
    justify-content: center;
  }
`
// box do botão

const ContainerFlexButton = styled.div`
  border: 3px #0414f5 solid;
  /* width: 40%; */
  min-height: 100%;
  left: Cal(-100% + 45px);
  padding: 0 auto;
  margin: 0 auto;
  min-width: 40px;
  height: 40px;
  color: white;
  font-size: 16px;
  font-family: 'Stencil';
  display: flex;

  background-color: transparent;
  /* flex-flow: nowrap; */
  justify-content: center;
  align-items: center;
  /* align-content: center; */
`
// ============================
const ButtonMenuMain = styled.button`
  border: none;
  padding: 0px auto;
  margin: 0px auto;
  cursor: pointer;
  outline: none;
  width: 40px;
  height: 40px;
  color: white;
  font-size: 16px;
  font-family: 'Stencil';
  display: block;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
`

export default function Menu() {
  const router = useHistory()

  const handleHome = useCallback(() => {
    router.replace('/')
  }, [router])

  return (
    <MenuContainer>
      <MenuFlex>
        <nav>
          <ContainerFlexButton>
            {'AAAAAAAA'}
            <ButtonMenuMain img={mnmain} />
          </ContainerFlexButton>
          <ul>
            <li>
              <ContainerFlexButton>
                {'li item 1'}
                <ButtonMenuMain img={mnmain} onClick={handleHome} />
              </ContainerFlexButton>
            </li>

            <li> li item 1 </li>
            <li> li item 1 </li>
          </ul>
        </nav>
      </MenuFlex>
    </MenuContainer>
  )
}
