// import React from 'react'
// import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import Modal from '../Modal'
// imagens button
// import semimg from '../../assets/images/semimg.svg'
// import close from '../../assets/images/close.svg'

// const ButtonClouseModal = styled.button`
//   /* border: 1px red solid; */
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

// const ShoppingCol = styled.div`
//   border: 3px white solid;
//   border-radius: 10px;
//   padding: 5px auto;
//   margin: 5px auto;
//   min-width: 100%;
//   display: flex;
//   background-color: rgba(211, 211, 211, 1);
// `
// const ShoppingFlex = styled.div`
//   /* border: 2px #ea00ff dashed; */
//   border-radius: 10px;
//   padding: 3px 3px 3px 3px;
//   margin: 10px 10px 10px 10px;
//   height: 100%;
//   width: 100%;
//   display: flex;
//   flex-flow: wrap;
//   justify-content: space-between;
//   align-items: center;
//   align-content: center;
// `
// const CtrlPageCol = styled.div`
//   border: 3px white solid;
//   border-radius: 10px;
//   padding: 2px auto;
//   margin: 2px auto;
//   min-width: 100%;
//   display: flex;
//   background-color: rgba(0, 0, 0, 1);
// `
// /** toolsbar  */

// const CtrlPage = styled.div`
//   /* border: 1px red solid; */
//   min-height: 40px;
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

// const ShoppingItemProduto = styled.div`
//   border: 1px yellow solid;
//   border-radius: 5px;
//   padding: 3px 0px 3px 3px;
//   margin: 5px 5px 5px 5px;
//   width: 125px;
//   height: 220px;
//   display: flex row;
//   flex-flow: wrap;

//   justify-content: center;
//   align-items: center;
//   align-content: center;
//   background-color: #58b0f8;
//   font-size: 12pt;
//   div {
//     /* border: 1px black solid; */
//     border-radius: 5px;
//     padding: 2px auto;
//     margin: 4px auto;
//     width: 100px;

//     /* font-size: 12pt; */
//   }
// `
/** botão  */

// const ShoppingImagemProduto = styled.div`
//   /* border: 3px red solid; */
//   padding: 2px auto;
//   margin: 2px auto;
//   height: 110px;
//   width: 62.5px;
//   display: flex;
//   justify-content: center;
//   align-items: stretch;
//   align-content: center;
//   background-image: url(${({ img }) => img || semimg});
//   background-repeat: no-repeat;
//   background-size: 60px;
//   background-position: center;
//   img {
//     max-width: 100%;
//     display: block;
//     margin: 0px 0px 0px 0px;
//   }
// `
// const CtrlPageButton = styled.button`
//   border: 1px #faf000 solid;
//   /* border: 1px transparent; */
//   padding: 0px 0px 0px 0px;
//   margin: 5px 5px 5px 5px;
//   display: block;
//   width: 40px;
//   height: 40px;
//   background-color: transparent;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-position: center;
//   background-image: url(${({ img }) => img || semimg});
//   cursor: pointer;
//   outline: none;
// `

// export default function ModalTools1({ id = 'modal', onClose = () => {}, children }) {
//   const handleOutsideClick = e => {
//     if (e.target.id === id) onClose()
//   }
//   return (
//     <Modal id={id} onClick={handleOutsideClick}>
//       <ContainerModal>
//         <ButtonClouseModal img={close} onClick={onClose} />
//         {children}
//       </ContainerModal>
//     </Modal>
//   )
// }

// ModalTools1.propTypes = {
//   id: PropTypes.string,
//   onClose: PropTypes.func,
//   children: PropTypes.any
// }

// ModalTools1.defaultProps = {
//   children: null
// }

/* <ShoppingCol>
<ShoppingFlex>
  <CtrlPageCol>
    <CtrlPage>
      <CtrlPageButton onClick={onClose} img={close}/>
    <CtrlPage>
  <CtrlPageCol>
  <ShoppingItemProduto>
    {children}
  </ShoppingItemProduto>
</ShoppingFlex>
</ShoppingCol> */
