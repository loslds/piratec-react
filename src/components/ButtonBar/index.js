import React from 'react'

import { ImagesContainer, ImagemButton } from '../ContainerCss'

import localizar from '../../assets/images/localizar.svg'
import watszap from '../../assets/images/watszap.svg'
import telefone from '../../assets/images/telefone.png'
import email from '../../assets/images/email.png'
import internet from '../../assets/images/internet.svg'
import facebook from '../../assets/images/facebook.svg'
import instagram from '../../assets/images/instagram.svg'

const listBtn = [
  { id: 1, img: watszap, label: 'watszap', href: 'https://wa.me/5585997851139' },
  { id: 2, img: telefone, label: 'telefone', href: 'tel://85999999' },
  { id: 3, img: email, label: 'email', href: 'mailto://' },
  { id: 4, img: internet, label: 'internet', href: 'http://site' },
  { id: 5, img: facebook, label: 'facebook', onClick: () => {} },
  { id: 6, img: instagram, label: 'instagram', onClick: () => {} },
  { id: 7, img: localizar, label: 'localizar', onClick: () => {} }
]

export default function ButtonBar() {
  const handleClick = e => {
    const idClicked = parseInt(e.target.value, 10) || 0
    const found = listBtn.find(item => item.id === idClicked)
    if (found) window.open(found.href || '', 'target_blank')
  }

  return (
    <ImagesContainer>
      {listBtn.map(({ id, img, label, href }) => {
        return (
          <ImagemButton
            key={id}
            img={img}
            value={id}
            title={`${label}-${href}`}
            onClick={handleClick}
          />
        )
      })}
    </ImagesContainer>
  )
}
