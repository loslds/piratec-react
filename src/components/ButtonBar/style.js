import styled from 'styled-components'

export const PageContent = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  height: 50px;
  min-width: 100%;
  background-color: rgba(224, 147, 147, 0.5);
`

export const PageFlex = styled.div`
  border: 1px #f7cb08 solid;
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  min-height: 100%;
  div {
    padding: 4px;
  }
  @media (max-width: 540px) {
    justify-content: center;
  }
`

export const PageColLeft = styled.div`
  border: 1px #fa0303 solid;
  padding: 0 4 0 4;
  margin: 0 4 0 4;
  max-height: 100%;
  min-width: 30%;
  display: flex;
  flex-flow: column left wrap;
  justify-content: center center;
  align-items: center;
  align-content: center;
`

export const PageColCenter = styled.div`
  border: 1px #04fa56 solid;
  padding: 0 4 0 4;
  margin: 0 4 0 4;
  max-height: 100%;
  min-width: 40%;
  display: flex;
  flex-flow: column center wrap;
  justify-content: center center;
  align-items: center;
  align-content: center;
`

export const PageColHidth = styled.div`
  border: 1px #0414f5 solid;
  padding: 0 4 0 4;
  margin: 0 4 0 4;
  max-height: 100%;
  min-width: 30%;
  display: flex;
  flex-flow: flex column right wrap;
  justify-content: center center;
  align-items: center;
  align-content: center;
`
