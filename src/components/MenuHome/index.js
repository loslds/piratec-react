// import React from 'react'
import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { homeRoutes } from '../../routes/routeList'
import { BarContainer, BarFlex, ConteinerFixButton, ImagemLeftButtomLabel } from '../ContainerCss'

export default function MenuHome() {
  const router = useHistory()

  const handleClick = useCallback(
    e => {
      const path = e && e.target ? e.target.value || '/' : '/'
      router.push(path)
    },
    [router]
  )
  return (
    <BarContainer color={'#a5d2f7'}>
      <BarFlex>
        <ConteinerFixButton>
          {homeRoutes.map(item => {
            const { label, path, img } = item
            return (
              <div key={`homeRoutes-${path}`}>
                <ImagemLeftButtomLabel value={path} onClick={handleClick} title={label} img={img}>
                  {label}
                </ImagemLeftButtomLabel>
              </div>
            )
          })}
        </ConteinerFixButton>
      </BarFlex>
    </BarContainer>
  )
}
