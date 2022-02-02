import React, { useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import { MainCheckBox, CheckboxContainer, Icon, HiddenCheckbox, StyledCheckbox } from './styles'

// import Checkbox from './Checkbox'

const listCBox = [{ tit: 'Click para Selecionar.', list: () => {} }]

export default function CheckBox1({ list }) {
  const [isActive, setIsActive] = useState(false)

  const handleOnChanger = useCallback(() => {
    GetOnChanger()
  }, [])

  function GetOnChanger() {
    if (isActive) return setIsActive(false)
    return setIsActive(true)
  }

  return (
    <MainCheckBox>
      return (
      {listCBox.map(({ tit, list }) => {
        const key = `action-${Math.floor(Math.random() * 10000)}`
        return (
          <label key={key}>
            {
              <CheckboxContainer>
                <HiddenCheckbox onChanger={handleOnChanger} />
                <StyledCheckbox onClick={isActive ? setIsActive(false) : setIsActive(true)}>
                  <Icon viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12" />
                  </Icon>
                </StyledCheckbox>
              </CheckboxContainer>
            }
            <span> {tit}</span>
          </label>
        )
      })}
      )
    </MainCheckBox>
  )
}

CheckBox1.propTypes = {
  // namelist: PropTypes.string,
  list: PropTypes.string
}

CheckBox1.defaultProps = {
  // namelist: null,
  list: null
}
// {listCBox.map(({ id, tit, onChanger, list }) => {
//   return (

//         <Checkbox checked={this.state.checked} onChange={handleOnChange} />
//         <span> {tit}</span>
//         )
// })}
