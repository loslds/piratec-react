import styled, { css } from 'styled-components'

export const MainCheckBox = styled.div`
  border: 2px #a3f8b8 dashed;
  padding: 0px auto;
  margin: 0px auto;
  min-width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: black;
  font-size: 16px;

  label {
    padding: 0px 3px 10px 3px;
    margin: 0px 3px 10px 3px;
    font-size: 14px;
    font-family: 'Stencil';
    color: black;
  }

  span {
    margin-left: 8px;
  }
`
export const CheckboxContainer = styled.div`
  border: 1px #ff00ff dashed;
  display: inline-block;
  vertical-align: middle;
`
export const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`
export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`
export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  transition: all 150ms;
  /* background: ${props => (props.checked ? 'green' : 'papayawhip')}; */
  ${props => {
    if (props.isActive) {
      return css`
        background-color: green;
      `
    }
    return css`
      background-color: #dbecdb;
    `
  }}

  ${HiddenCheckbox}:focus + & {
    box-shadow: 0 0 0 3px pink;
  }

  ${Icon} {
    visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  }

  div {
    padding: 5px auto;
    margin: 0px auto;
  }
`
