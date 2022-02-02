import React from 'react'
import PropTypes from 'prop-types'
import { CardCheckBoxFlex } from './style'
import Switches from '../Switches'

export default function CheckBox({ id, name, onChange }) {
  return (
    <CardCheckBoxFlex>
      <Switches id={id} name={name} onSwitchChange={onChange} />
    </CardCheckBoxFlex>
  )
}

CheckBox.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func
}

CheckBox.defaultProps = {
  id: 0,
  name: 'semnome',
  onChange: () => {}
}
