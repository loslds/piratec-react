/* eslint-disable react/prop-types */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 900px;
  max-width: 100%;
  position: relative;
  border: 1px dashed #000;
  margin: 0 auto;
  display: block;
  background-color: rgba(0, 0, 0, 0.1);
`

export default function Content({ children }) {
  return <Container>{children}</Container>
}
