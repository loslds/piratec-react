import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { mainRoutes } from '../../routes/routeList'
import { BarContainer, ImagesContainer, BtnBarMain } from '../ContainerCss'

export default function MenuPri() {
  const router = useHistory()

  const handleClick = useCallback(
    e => {
      const path = e && e.target ? e.target.value || '/' : ' '
      router.push(path)
    },
    [router]
  )

  return (
    <BarContainer>
      <ImagesContainer>
        {mainRoutes.map(item => {
          const { label, path, img } = item
          return (
            <BtnBarMain
              key={`menupri-${path}`}
              value={path}
              onClick={handleClick}
              title={label}
              img={img}
            />
          )
        })}
      </ImagesContainer>
    </BarContainer>
  )
}
