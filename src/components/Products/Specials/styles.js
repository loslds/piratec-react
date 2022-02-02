import styled from 'styled-components'
import semimg from '../../../assets/images/hdsiagate1T.png'

export const ShoppingCol = styled.div`
  border: 3px white solid;
  border-radius: 10px;
  padding: 5px auto;
  margin: 5px auto;
  min-width: 100%;
  display: flex;
  background-color: rgba(211, 211, 211, 1);
`
export const ShoppingFlex = styled.div`
  /* border: 2px #ea00ff dashed; */
  border-radius: 10px;
  padding: 3px 3px 3px 3px;
  margin: 10px 10px 10px 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`
export const ShoppingItemProduto = styled.div`
  border: 1px yellow solid;
  border-radius: 5px;
  padding: 3px 0px 3px 3px;
  margin: 5px 5px 5px 5px;
  width: 145px;
  height: 210px;
  display: flex row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  background-color: #58b0f8;
  font-size: 12pt;

  div {
    /* border: 1px black solid; */
    /* border-radius: 5px; */
    padding: 2px auto;
    margin: 8px auto;
    display: flex;
    flex-flow: wrap;
    justify-content: center;
    align-items: center;
    align-content: center;

    /* width: 135px; */

    /* font-size: 12pt; */
  }
`
export const CardAuxilar = styled.div`
  border: 1px black dashed;
  padding: 2px auto;
  margin: 8px auto;
  display: flex row;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const ShoppingImagemProduto = styled.div`
  /* border: 3px red solid; */
  padding: 2px auto;
  margin: 2px auto;
  height: 90px;
  width: 90px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  align-content: center;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: 90px;
  background-position: center;

  img {
    margin: 0px 0px 0px 0px;
    max-width: 100%;
    display: block;
  }
`
