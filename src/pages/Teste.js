import React from 'react'

import styled from 'styled-components'

const MenuContainer = styled.div`
  border: 1px red solid;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  z-index: 10;
  background-color: rgba(f, f, f, f, 0.5);
  display: block;
`
const ConteinerMenuProd = styled.div`
  border: 2px white solid;
  border-radius: 10px;
  position: left;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
  top: 60px;
  left: 0px;
  display: flex;
  flex-flow: row wrap;
  justify-content: left;
  align-items: left;
  align-content: center;
  background-color: rgba(101, 193, 250, 0.8);
`

export default function Teste() {
  return (
    <MenuContainer>
      <ConteinerMenuProd>
        <nav>
          <td>
            <span>Menu</span>
            <button />
          </td>
        </nav>
      </ConteinerMenuProd>
    </MenuContainer>
  )
}
