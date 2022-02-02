import React from 'react'
import PropTypes from 'prop-types'
import { ColMain, ColMainFlex } from './style'

export default function CardList({ children }) {
  return (
    <ColMain>
      <ColMainFlex>{children}</ColMainFlex>
    </ColMain>
  )
}

CardList.propTypes = {
  children: PropTypes.any
}

CardList.defaultProps = {
  children: null
}
