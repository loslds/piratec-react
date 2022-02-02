import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
// import { menuRoutes } from '../../routes/routeList'

import semimg from '../../assets/images/semimg.svg'

const MenuCadContainer = styled.div`
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
const ButtonCad = styled.button`
  padding: 0px;
  margin: 0px;
  align-items: center;
  align-content: center;
  justify-content: center center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`
const ImgButton = styled.img`
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-height: 46px;
  max-width: 46px;
  align-items: center;
  align-content: center;
`

const listMenuCad = [
  { id: 1, img: semimg, label: 'Fornevecdor', path: '../../assets/pages/Forneceedores' },
  { id: 2, img: semimg, label: 'Clientes', path: '../../assets/pages/Clientes' }
]
export default function Cadastros() {
  const router = useHistory()
  const handleClick = e => {
    router.push(e.target.value)
  }
  return (
    <MenuCadContainer>
      <h2>Menu CADASTROS</h2>
      <div>
        {listMenuCad.map(item => {
          const { id, img, label, path } = item
          return (
            <ButtonCad key={id} value={path} onClick={handleClick} title={label}>
              <ImgButton src={img} />
            </ButtonCad>
          )
        })}
      </div>
    </MenuCadContainer>
  )
}
