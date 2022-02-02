import React from 'react'
import styled from 'styled-components'
import Cadastros from '../components/Cadastros'

const MenuContainer = styled.div`
  border: 3px #40f708 solid;
  width: 100%;
  min-width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;

  div {
    padding: 0px;
    margin: 0px;
  }
`

// import styled from 'styled-components'
export default function PageCadastros() {
  return (
    <MenuContainer>
      <h2>MENUS de CADASTROS</h2>
      <Cadastros />
      <div>kglggkkgklk</div>
    </MenuContainer>
  )
}
