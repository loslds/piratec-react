import React from 'react'
import PropTypes from 'prop-types'
import { CardCheckBoxFlex } from './style'
import Switches from '../Switches'

export default function CheckBox() {
  return (
    <CardCheckBoxFlex>
      <Switches />
    </CardCheckBoxFlex>
  )
}

CheckBox.propTypes = {
  children: PropTypes.any
}

CheckBox.defaultProps = {
  children: null
}
