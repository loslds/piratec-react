import React from 'react'
import PropTypes from 'prop-types'
import { CtrlPageCol, CtrlPage } from './style'

export default function ToolBar({ children }) {
  return (
    <CtrlPageCol>
      <CtrlPage>{children}</CtrlPage>
    </CtrlPageCol>
  )
}

ToolBar.propTypes = {
  children: PropTypes.any
}

ToolBar.defaultProps = {
  children: null
}
