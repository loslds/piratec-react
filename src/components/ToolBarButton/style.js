import styled from 'styled-components'
import semimg from '../../assets/images/semimg.svg'

export const CtrlPageCol = styled.div`
  border: 3px white solid;
  border-radius: 10px;
  padding: 2px auto;
  margin: 2px auto;
  min-width: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 1);
`
export const CtrlPage = styled.div`
  min-height: 40px;
  width: 100%;
  padding: 2px 5px 2px 5px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
  background-color: transparent;
  div {
    padding: 0px 5px 0px 5px;
    margin: 0px 0px 0px 0px;
  }
`
export const ButtonBar = styled.button`
  border: 1px #faf000 solid;
  padding: 0px 0px 0px 0px;
  margin: 5px 5px 5px 5px;
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  outline: none;
`
