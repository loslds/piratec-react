import React from 'react'
import PropTypes from 'prop-types'
import { CardListBox, CardListBoxFlex } from './style'

export default function MainList({ children }) {
  return (
    <CardListBox>
      <CardListBoxFlex>{children}</CardListBoxFlex>
    </CardListBox>
  )
}
MainList.propTypes = {
  children: PropTypes.any
}

MainList.defaultProps = {
  children: null
}
