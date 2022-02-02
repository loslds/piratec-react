import React from 'react'

import styled from 'styled-components'
import { BarContainer, BarFlex } from '../ContainerCss'
import semimg from '../../assets/images/semimg.svg'
import Refresca from '../../assets/images/fetchData.svg'

const ContainerButton = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  max-width: 100%;
  display: flex;
  min-height: 50px;
  background-color: ${({ color }) => color};
`
const ConteinerFlex = styled.div`
  border: 2px #f80606 dotted;
  width: 900px;
  padding: 0 auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  // min-height: 50px;
  font-size: 24px;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
const ConteinerImagem = styled.div`
  border: 1px red solid;
  padding: 10px;
  margin: 2px auto;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  img {
    /* max-width: 50%; */
    display: block;
    margin: 0 auto;
  }
`
const ConteinerButton = styled.button`
  /* border: 1px blue solid; */
  padding: 0px auto;
  margin: 0px auto;
  width: 100%;
  height: 100%;
  align-items: center;
  align-content: center;
  justify-content: center center;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
`
export default function BarMainFooter() {
  return (
    <BarContainer>
      <BarFlex>
        <ConteinerImagem>
          <ConteinerButton img={Refresca} />
        </ConteinerImagem>
      </BarFlex>
    </BarContainer>
  )
}
