import React, { useCallback, useMemo } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import { ButtonBar, ToolBar } from '../../ToolBarButton'
// =======================
import abortar from '../../../assets/images/close.svg'
import menuprod from '../../../assets/images/menuprod.svg'
import refresca from '../../../assets/images/refresca.svg'
import filtradados from '../../../assets/images/filtradados.svg'
// import subgrupo from '../../../assets/images/subgrupo.svg'
// import busca from '../../../assets/images/search.svg'

export default function ActionsBar(props) {
  const router = useHistory()
  const { handleClickMenu, handleClickRefresh, handleClickFilter } = props

  // ...
  const handleClickAbort = useCallback(() => {
    router.push('/')
  }, [router])

  // ...
  const listButtonTools = useMemo(() => {
    return [
      { img: abortar, label: 'Aborta Shopping', onClick: handleClickAbort },
      { img: menuprod, label: 'Menu Produtos', onClick: handleClickMenu },
      { img: refresca, label: 'Refrescar Dados', onClick: handleClickRefresh },
      { img: filtradados, label: 'Filtra Dados ', onClick: handleClickFilter }
    ]
  }, [handleClickAbort, handleClickMenu, handleClickRefresh, handleClickFilter])

  return (
    <ToolBar>
      {listButtonTools.map(({ img, label, onClick }) => {
        const key = `action-${Math.floor(Math.random() * 10000)}`
        return <ButtonBar key={key} img={img} title={`${label}`} onClick={onClick} />
      })}
    </ToolBar>
  )
}

ActionsBar.propTypes = {
  handleClickMenu: PropTypes.func,
  handleClickRefresh: PropTypes.func,
  handleClickFilter: PropTypes.func
}

ActionsBar.defaultProps = {
  handleClickMenu: () => {},
  handleClickRefresh: () => {},
  handleClickFilter: () => {}
}
