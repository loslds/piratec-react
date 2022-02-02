import React from 'react'
import PropTypes from 'prop-types'
import { CardHeader, CardHeaderFlex } from './style'

export default function HeaderList({ children }) {
  return (
    <CardHeader>
      <CardHeaderFlex>{children}</CardHeaderFlex>
    </CardHeader>
  )
}

HeaderList.propTypes = {
  children: PropTypes.any
}

HeaderList.defaultProps = {
  children: null
}
