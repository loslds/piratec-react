import React from 'react'
import PropTypes from 'prop-types'
import { MainCardList, MainCardListFlex } from './style'

export default function MainList({ disp, children }) {
  return (
    <MainCardList disp={disp}>
      <MainCardListFlex>{children}</MainCardListFlex>
    </MainCardList>
  )
}
MainList.propTypes = {
  disp: PropTypes.bool,
  children: PropTypes.any
}

MainList.defaultProps = {
  disp: false,
  children: null
}
