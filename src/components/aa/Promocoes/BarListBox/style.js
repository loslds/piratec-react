import styled, { css } from 'styled-components'

export const ContainerMain = styled.div`
  border: 2px blue solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 0px auto;
  margin: 0px 10px 10px 10px;
  max-width: 100%;
  min-height: 50px;
  display: flex;
  background-color: transparent;

  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
export const ContainerMainFlex = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 0px auto;
  margin: 0px auto;
  background-color: transparent;
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
/**   ======================= */
export const ColMain = styled.div`
  border: 2px black solid;
  border-radius: 15px;
  padding: 0px 0px 0px 0px;
  margin: 10px 0px 10px 0px;
  min-width: 48%;
  height: 100%;
  display: flex;
`
export const ColMainFlex = styled.div`
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-content: center;
  align-items: center;

  /* display: flex row wrap; */
`

export const CardHeader = styled.div`
  border-bottom: 2px black solid;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding: 0px auto;
  margin: 0px auto;
  min-height: 55%;
  min-width: 100%;
  display: flex;
`
export const CardHeaderFlex = styled.div`
  border: 0px;
  border-top-left-radius: 13px;
  border-top-right-radius: 13px;
  padding: 0px auto;
  margin: 0px auto;
  width: 100%;
  min-height: 100%;
  background-color: rgba(156, 155, 155, 0.8);
  display: flex;
`
/** =================================== */
export const TitleListFlex = styled.div`
  border: 0px;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 49%;
  height: 100%;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const CardCheckBoxFlex = styled.div`
  border: 0px; /** 1px #00ff9d solid;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 10%;
  height: 100%;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`

/** ================================== */

/** ================================== */
export const CardListBox = styled.div`
  border: 0px; /** 1px blue solid;*/
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  display: ${props => (props.disp ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const CardListBoxFlex = styled.div`
  border: 0px;
  border-bottom-left-radius: 13px;
  border-bottom-right-radius: 13px;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  background-color: rgba(212, 209, 209, 0.774);
  display: flex;
  flex-flow: wrap;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`

/** ================================== */
export const TitleListBoxFlex = styled.div`
  border: 0px; /** 1px red solid;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  height: 100%;
  color: black;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const CardSelectList = styled.div`
  border: 2px black solid;
  border-radius: 12px;
  padding: 0px auto;
  margin-bottom: 10px;
  min-width: 80%;
  height: 100%;
  display: flex;
`
