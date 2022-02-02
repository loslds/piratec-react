import React from 'react'
import PropTypes from 'prop-types'
import { ContainerMain, ContainerMainFlex } from './style'

export default function BoxList({ children }) {
  return (
    <ContainerMain>
      <ContainerMainFlex>{children}</ContainerMainFlex>
    </ContainerMain>
  )
}

BoxList.propTypes = {
  children: PropTypes.any
}

BoxList.defaultProps = {
  children: null
}
