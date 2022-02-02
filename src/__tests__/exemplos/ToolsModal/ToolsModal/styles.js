import styled from 'styled-components'
import semimg from '../../assets/images/semimg.svg'
// import close from '../../assets/images/close.png'

// ------------------ Container Modal ------------
export const ContainerModal = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  background-color: Transparent;
`
export const FlexModal = styled.div`
  border: 3px red solid;
  border-radius: 10px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex row;
  flex-flow: nowrap;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  color: black;
  font-size: 18px;

  @media (min-width: 350px) {
    justify-content: center;
    align-items: center;
  }
`
/* ----fim da page e inicio da Heard ====== */
export const FlexHead = styled.div`
  border: 3px violet solid;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex row;
  flex-flow: nowrap;
  min-height: 50px;
  font-size: 18px;
  background-color: transparent;
`
export const FlexTageta = styled.div`
  /*border: 0px; */
  // border: 3px red dashed;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  min-height: 100%;
  padding: 1px auto;
  margin: 0px auto;
  background-color: black;
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 18px;
  color: white;
`
// ------------------ Container Tools ------------
export const ContainerTageta = styled.div`
  border: 0px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  min-height: 45px;
  min-width: 100%;
  display: flex;
  background-color: transparent;
`
export const ColTituloTageta = styled.div`
  border: none; /*1px white dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 70%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`
export const ColButton = styled.div`
  border: none; /* 1px #aaecaa dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 6%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
`
export const ContanerButton = styled.div`
  border: none; /*1px red solid;*/
  padding: 0px auto;
  margin: 0px auto;
  width: 45px;
  height: 45px;
  display: block;
  background-color: transparent;
`
export const ButtonClouseModal = styled.button`
  /* border: 1px red solid; */
  /* border: 1px transparent; */
  margin: 2px auto;
  padding: 2px auto;
  display: block;
  width: 40px;
  height: 40px;
  background-color: transparent;
  background-image: url(${({ img }) => img || semimg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  cursor: pointer;
  outline: none;
`
/**   --------- fim conteiner Tools e da Heard ---------  */

/**  -----------inicio conteiner modal --------- */
export const FlexMain = styled.div`
  border: 3px blue solid;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  width: 900px;
  padding: 0px auto;
  margin: 0px auto;
  display: flex row;
  flex-flow: nowrap;
  min-height: 50px;
  font-size: 18px;
  background-color: transparent;
`
export const FlexConteudo = styled.div`
  /*border: 0px; */
  border: 3px #35fa70 dashed;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  width: 100%;
  min-height: 100%;
  padding: 1px auto;
  margin: 0px auto;
  background-color: rgba(f, f, f, 0.8);
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  font-size: 18px;
  color: white;
`
export const ColMain = styled.div`
  border: none; /*1px white dashed;*/
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const ContainerMain = styled.div`
  border: 1px #aaecaa solid;
  /* border: 0px; */
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 0px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  height: 100%;
  min-width: 100%;
  display: flex;
  background-color: #e5e2e2;
  color: black;
  div {
    border: 1px red solid;
    padding: 0px 0px 0px 0px;
    margin: 0px 0px 0px 0px;
  }
`
