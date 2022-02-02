import styled from 'styled-components'
import semimg from '../../assets/images/semimg.svg'

export const BarContainer = styled.div`
  padding: 0px auto;
  margin: 0px auto;
  max-width: 100%;
  display: flex;
  min-height: 50px;
  background-color: ${({ color }) => color};
`
export const BarFlex = styled.div`
  /* border: 2px #f80606 dotted; */
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 50px;
  font-size: 24px;
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const BarColLeft = styled.div`
  padding: 4px auto;
  margin: 4px auto;
  min-width: 49%;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const BarColHidth = styled.div`
  /* border: 1px #ff0000 solid; */
  padding: 4px auto;
  margin: 4px auto;
  min-width: 40%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`
export const ImagesContainer = styled.div`
  /* border: 2px black solid; */
  display: flex;
  flex-flow: 'row nowrap';
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
export const ConteinerItemLink = styled.div`
  /* border: 1px blue solid; */
  margin: 0px 4px 0px 4px;
  padding: 0px 4px 0px 4px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
  font-size: 20px;
`
export const MainContainer = styled.div`
  border: 1px #40f708 solid;
  padding: 0;
  margin: 0;
  min-height: 100%;
  width: 100%;
  display: flex;

  justify-content: center;
`
export const BtnBarMain = styled.button`
  /* border: 1px blue solid; */
  padding: 0px;
  margin: 0 4px;
  align-items: center;
  align-content: center;
  justify-content: center center;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
`
export const ImagemButton = styled.button`
  /* border: 1px blue solid; */
  border: 1px transparent;
  margin: 0 4px;
  padding: 0;
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
export const ConteinerFixButton = styled.div`
  /* border: 2px #000000 dotted; */
  margin: 0 auto;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: inline-flex;
  align-content: center;
  align-items: center;
  div {
    display: block;
    padding: 0 8px 0 8px;
    width: 33.333%;
  }
`
export const ImagemLeftButtomLabel = styled.button`
  padding-left: 44px;
  margin: 0 auto;
  height: 40px;
  width: 100%;
  border-radius: 5px;
  background-color: #58b0f8;
  background-repeat: no-repeat;
  background-size: 40px;
  background-position: left;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  display: block;
  overflow-x: hidden;
  color: black;
  font-size: 16px;
  font-family: 'Stencil';
`
export const ImgSys = styled.img`
  max-height: 50px;
  padding: 0 4 0 4;
  margin: 2 auto;
  display: block;
`
export const ImgEmp = styled.img`
  max-height: 50px;
  padding: 0 4 0 4;
  margin: 2 auto;
  display: block;
`
export const MenuBarFlex = styled.div`
  border: 1px #f80606 dotted;
  width: 900px;
  padding: 0 auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 100%;
  font-size: 20px;
  color: black;
  /* background-color: white; */
  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const ButtonCallModal = styled.button`
  border: 2px white solid; /*transparent;*/
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  padding: 2px auto;
  min-height: 40px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  background-color: transparent;
  background-color: #58b0f8;

  /* background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${({ img }) => img || semimg}); */

  color: black;
  font-size: 18px;
  font-family: 'Stencil';
  cursor: pointer;
  outline: none;
`
