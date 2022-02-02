import styled from 'styled-components'

export const MnBarContainer = styled.div`
  // border: 3px #40f708 solid;
  width: 100%;
  min-width: 100%;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  background-color: ${({ color }) => color};
`
export const MnBarFlex = styled.div`
  // border: 1px #f02106 solid;
  max-width: 100%;
  min-height: 65px;
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
    border: 1px #fd0101 solid;
  }

  @media screen and (max-width: 520px) {
    justify-content: center;
    justify-items: center center;
  }
`

export const MnBarImgMn = styled.div`
  //border: 3px #f02106 solid;
  max-width: 65px;
  max-height: 65px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  position: left;
  display: block;
  div {
    margin: 0px 0px 0px 0px;
    padding: 0px 0px 0px 0px;
  }
`
export const BtnMnBarImg = styled.button`
  // border: 1px #ff04f9 solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: transparent;
  position: left;
`
export const ImgMnMan = styled.img`
  //border: dashed 2 px solid;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 0px 0px;
  max-height: 46px;
  max-width: 46px;
  display: flex;
  align-items: center;
  align-content: center;
`
