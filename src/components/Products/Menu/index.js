import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import semimg from '../../../assets/images/semimg.svg'
import setaup from '../../../assets/images/setaup.svg'

const MenuBarColLeft = styled.div`
  border: 2px white solid;
  border-radius: 10px;
  padding: 10px 10px 10px 10px;
  margin: 10px 10px 10px 10px;
  max-width: 33%;
  /* min-height: 100%; */
  flex-flow: row wrap;
  justify-content: left;
  align-items: center;
  align-content: center;
  background-color: rgba(101, 193, 250, 0.8);
`

const ContentMenu = styled.div`
  border: 0px;
  border-radius: 10px;
  width: 100%;
  padding: 0px auto;
  margin: 0px auto;
  display: flex;
`

const ImagemRightButtomLabel = styled.button`
  border-bottom: 1px black dashed;
  padding-right: 44px;
  margin: 0 auto;
  height: 35px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  background-repeat: no-repeat;
  background-size: 30px;
  background-position: right;
  background-image: url(${({ img }) => img || semimg});
  cursor: pointer;
  display: block;
  overflow-x: hidden;
  color: #000000;
  font-size: 16px;
  font-family: 'Stencil';
`
export default function Menu() {
  const [state, setState] = useState(true)

  const handleToggleStateMenu = useCallback(() => {
    setState(oldState => {
      return !oldState
    })
  }, [])
  return (
    <MenuBarColLeft>
      <ContentMenu>
        <nav>
          <ImagemRightButtomLabel
            color="rgba(101, 193, 250, 0.8)"
            img={setaup}
            onClick={handleToggleStateMenu}
          >
            {'MENU'}
          </ImagemRightButtomLabel>
          <ul>
            <li>grupo01</li>
            <ul>
              <li>sub-grupo01</li>
              <li>sub-grupo02</li>
              <li>sub-grupo03</li>
              <li>sub-grupo04</li>
              <li>sub-grupo05</li>
              <li>sub-grupo06</li>
              <li>sub-grupo07</li>
              <li>sub-grupo08</li>
              <li>sub-grupo09</li>
              <li>sub-grupo10</li>
            </ul>
            <li>grupo02</li>
          </ul>
        </nav>
      </ContentMenu>
    </MenuBarColLeft>
  )
}

Menu.defaultProps = {
  color: 'transparent'
}

Menu.propTypes = {
  color: PropTypes.string
}
