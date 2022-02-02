import React from 'react'
import PropTypes from 'prop-types'
import { TitleListFlex } from './style'

export default function TitleList({ title }) {
  return (
    <TitleListFlex>
      <h3>{title}</h3>
    </TitleListFlex>
  )
}

TitleList.propTypes = {
  title: PropTypes.string
}

TitleList.defaultProps = {
  title: 'Selecione uma Opção :'
}
