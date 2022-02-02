import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { rootRoutes } from '../../routes/routeList'
import { compareValues } from 'mini-helper'
import { BarContainer, BarFlex, BarColLeft, BarColHidth, ConteinerItemLink } from '../ContainerCss'
import ButtonBar from '../ButtonBar'

export default function Footers(props) {
  const { color } = props
  const lista = useMemo(() => {
    return rootRoutes.sort(compareValues('id', 'asc'))
  }, [])

  return (
    <BarContainer color={color}>
      <BarFlex>
        <BarColLeft>
          {lista.map(route => {
            const { label, path } = route
            return (
              <ConteinerItemLink key={`link-footer-${path}`}>
                <Link to={path}>{label}</Link> {'  '}
              </ConteinerItemLink>
            )
          })}
        </BarColLeft>
        <BarColHidth>
          <ButtonBar />
        </BarColHidth>
      </BarFlex>
    </BarContainer>
  )
}

Footers.defaultProps = {
  color: 'transparent'
}

Footers.propTypes = {
  color: PropTypes.string
}
