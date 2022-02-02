import React from 'react'
import PropTypes from 'prop-types'
import { ContainerMain, ContainerMainFlex } from './style'


export default function BoxList({ label, disp, children }) {
  return (
    <ContainerMain>
      <ContainerMainFlex>{children}</ContainerMainFlex>
    </ContainerMain>
  )
}

BoxList.propTypes = {
  label: PropTypes.string,
  disp: PropTypes.bool,
  children: PropTypes.any
}

BoxList.defaultProps = {
  label: null,
  disp: false
  children: null
}
