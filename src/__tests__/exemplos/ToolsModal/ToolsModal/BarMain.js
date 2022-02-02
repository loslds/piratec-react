import React from 'react'
import PropTypes from 'prop-types'
import { FlexMain, FlexConteudo } from './styles'

export default function BarMain({ children }) {
  return (
    <FlexMain>
      <FlexConteudo>{children}</FlexConteudo>
    </FlexMain>
  )
}

BarMain.propTypes = {
  children: PropTypes.any
}

BarMain.defaultProps = {
  children: null
}
