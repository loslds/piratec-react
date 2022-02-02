import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Checkbox from './Checbox.js'

const MainCheckBox = styled.div`
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
    /* justify-content: center;
    align-items: center;
    align-content: center; */
    font-size: 14px;
    font-family: 'Stencil';
    color: black;
  }

  span {
    margin-left: 8px;
  }
`

export default function CheckBox({ nomeLista }) {
  const [state, setstate] = useState(false)

  const handleCheckboxChange = event => {
    setstate({ checked: event.target.checked })
  }
  return (
    <MainCheckBox>
      <div id={'1'}>
        <label>
          <Checkbox checked={this.state.checked} onChange={this.handleCheckboxChange} />
          <span> {label}</span>
        </label>
      </div>
    </MainCheckBox>
  )
}

CheckBox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  cheched: PropTypes.bool,
  handleCheckboxChange: PropTypes.func
}

CheckBox.defaultProps = {
  id: null,
  label: 'Click para Selecionar.'
}
