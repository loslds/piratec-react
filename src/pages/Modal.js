import React from 'react'
import { BarContainer, BarFlex } from '../components/ContainerCss'
import Modal from '../components/Modal'
// import TitleModal from '../components/LoadModal/TitleModal'
export default function PageModal() {
  return (
    <BarContainer>
      <BarFlex>
        <Modal>{'entrei'}</Modal>
      </BarFlex>
    </BarContainer>
  )
}

// <MainModal id={id} onClick={handleOutsideClick}>
//   <MainContainer>
//     <ContainerCard>
//       <FlexCard>
//         <CardTitle>
//           <h2>Titulo Modal</h2>{' '}
//         </CardTitle>
//         <ContainerButton>
//           <ButtonModal img={semimg} onClick={() => {}} />
//           <ButtonModal img={close} onClick={onClose} />
//         </ContainerButton>
//       </FlexCard>
//     </ContainerCard>
//     <h2>Titulo Modal</h2>
//     {children}
//   </MainContainer>
// </MainModal>

// PageModal.propTypes = {
//   id: PropTypes.string,
//   onClose: PropTypes.func,
//   children: PropTypes.any
// }

// PageModal.defaultProps = {
//   children: null
// }
// import styled from 'styled-components'
// import semimg from '../assets/images/semimg.svg'

// const ContainerModal = styled.div`
//   border: 2px #f80606 solid;
//   position: absolute;
//   top: 0px;
//   left: 0px;
//   width: 100vw;
//   height: 88.8vh;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   display: flex;
//   background-color: rgba(0, 0, 0, 0, 0.3);
// `
// const BarContainer = styled.div`
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   max-width: 100%;
//   display: flex;
//   min-height: 100%;
//   background-color: transparent;
// `
// const BarFlex = styled.div`
//   /* border: 2px #f80606 dotted; */
//   width: 900px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   min-height: 100%;
//   font-size: 24px;
//   @media (min-width: 350px) {
//     justify-content: center;
//     align-items: center;
//   }
// `

// //

// const CtrlPageCol = styled.div`
//   // border: 3px white solid;
//   border-radius: 10px;
//   padding: 0px 10px 0px 10px;
//   margin: 0px 0px 0px 0px;
//   height: 900px;
//   min-width: 100%;
//   display: flex;
//   background-color: transparent;
// `
// const CtrlPage = styled.div`
//   /* border: 1px red solid; */
//   min-width: 40px;
//   width: 100%;
//   padding: 2px 5px 2px 5px;
//   margin: 0px 0px 0px 0px;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-around;
//   align-content: center;
//   align-items: center;
//   background-color: transparent;
//   div {
//     padding: 0px 5px 0px 5px;
//     margin: 0px 0px 0px 0px;
//   }
// `
// export default function PageModal() {
//   return (
//     <ContainerModal>
//       <BarContainer>
//         <BarFlex>
//           <CtrlPageCol>
//             <CtrlPage>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//               <h1>sdfsdfsdfsdfsd</h1>
//             </CtrlPage>
//           </CtrlPageCol>
//         </BarFlex>
//       </BarContainer>
//     </ContainerModal>
//   )
// }
// const FlexModal = styled.div`
//   border: 3px #05f7f7 dashed;
//   border-radius: 10px;
//   width: 900px;
//   padding: 0px auto;
//   margin: 0px auto;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
//   position: relative;
//   font-size: 18px;
//   background-color: transparent;

//   @media (min-width: 350px) {
//     justify-content: center;
//     align-items: center;
//   }
//
// `
/*   fim conteiner page    */
/**  inicio conteiner head */
// const ConteinerHead = styled.div`
//   border: 3px red solid;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
//   border-bottom: 0px;
//   /* height: 50px;
//   min-height: 50px; */
//   width: 100%;
//   padding: 0px auto;
//   margin: 0px auto;
//   display: flex row;
//   flex-flow: nowrap;
//   font-size: 18px;
//   background-color: transparent;

//   @media (min-width: 350px) {
//     justify-content: center;
//     align-items: center;
//   }
// `
// const FlexHead = styled.div`
//   border: 0px; /* violet solid;*/
//   border-top-left-radius: 8px;
//   border-top-right-radius: 8px;
//   border-bottom: 0px;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   /* min-height: 45px; */
//   min-width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   background-color: black;
//   display: flex;

//   font-size: 18px;
//   color: white;
// `
// const ColTituloHead = styled.div`
//   border: 1px #a0fa6b dashed;
//   padding: 0px 0px 0px 0px;
//   margin: 0px 0px 0px 0px;
//   min-width: 80%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   font-size: 18px;
//   color: white;
// `
// const ColButton = styled.div`
//   border: 1px #aaecaa dashed;
//   padding: 0px 5px 0px 40px;
//   margin: 0px 0px 0px 0px;
//   min-width: 6%;
//   display: flex;
//   flex-flow: row wrap;
//   justify-content: flex-end;
//   align-items: center;
//   align-content: center;
// `

// // const ContainerTageta = styled.div`
// //   border: 0px; //* violet solid;*/
// //   border-top-right-radius: 5px;
// //   border-top-left-radius: 5px;
// //   border-bottom: 0px;
// //   padding: 0px 0px 0px 0px;
// //   margin: 0px 0px 0px 0px;
// //   min-height: 45px;
// //   min-width: 100%;
// //   display: flex;
// //   align-items: center;
// //   align-content: center;
// //   background-color: 1px violet solid;
// //   font-size: 18px;
// //   color: white;
// // `
// const ContanerButton = styled.div`
//   border: none; /*1px red solid;*/
//   padding: 0px auto;
//   margin: 0px auto;
//   width: 45px;
//   height: 45px;
//   display: flex;
//   /* align-items: center; */
//   /* align-content: center; */

//   background-color: transparent;
// `
// const ButtonClouseModal = styled.button`
//   border: 1px red solid;
//   /* border: 1px transparent; */
//   margin: 2px auto;
//   padding: 2px auto;
//   display: block;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   cursor: pointer;
//   outline: none;
// `

// const ConteinerMain = styled.div`
//   border: 3px blue solid;
//   border-bottom-right-radius: 10px;
//   border-bottom-left-radius: 10px;
//   border-top: 0px;
//   height: Cal(100% - 100px);
//   min-height: 100px;
//   width: 100%;
//   padding: 0px auto;
//   margin: 0px auto;
//   display: flex row;
//   flex-flow: nowrap;
//   font-size: 18px;
//   background-color: transparent;

//   @media (min-width: 350px) {
//     justify-content: center;
//     align-items: center;
//   }
// `

// const FlexMain = styled.div`
//   border: 0px; /* violet solid; */
//   border-bottom-left-radius: 8px;
//   border-bottom-right-radius: 8px;
//   min-height: Calc(100% - 50px);
//   width: 100%;
//   padding: 0px auto;
//   margin: 0px auto;
//   background-color: white;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;

//   font-size: 18px;
//   color: black;
// `

// // const ContainerTageta = styled.div`
// //   border: 0px;
// //   border-top-right-radius: 5px;
// //   border-top-left-radius: 5px;
// //   padding: 0px 0px 0px 0px;
// //   margin: 0px 0px 0px 0px;
// //   min-height: 45px;
// //   min-width: 100%;
// //   display: flex;
// //   background-color: transparent;
// // `
// // const FlexTageta = styled.div`
// //   border: 2px #adff8d solid;
// //   border-top-right-radius: 10px;
// //   border-top-left-radius: 10px;
// //   width: 100%;
// //   height: 100%;
// //   padding: 1px auto;
// //   margin: 0px auto;
// //   background-color: transparent;
// //   display: flex;
// //   flex-flow: wrap;
// //   justify-content: space-between;
// //   align-items: center;
// //   align-content: center;
// //   font-size: 18px;
// //   color: white;
// // `

// // const ContainerMain = styled.div`
// //   border: 1px blue dashed;
// //   border-bottom-left-radius: 10px;
// //   border-bottom-right-radius: 10px;
// //   width: 100%;
// //   height: 100%;
// //   padding: 1px auto;
// //   margin: 0px auto;
// //   background-color: transparent;
// //   display: flex row;
// //   flex-flow: nowrap;
// //   // justify-content: space-between;
// //   align-items: center;
// //   align-content: center;
// //   font-size: 18px;
// //   color: black;
// // `
