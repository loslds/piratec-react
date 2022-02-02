import React from 'react'
import PropTypes from 'prop-types'
import { TitleListFlex } from './style'

export default function TitleListBox({ title }) {
  return (
    <TitleListFlex>
      <h5>{title}</h5>
    </TitleListFlex>
  )
}

TitleListBox.propTypes = {
  title: PropTypes.string
}

TitleListBox.defaultProps = {
  title: 'Selecione uma Opção : '
}
