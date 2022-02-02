import React, { useCallback, useState } from 'react'
import { listGrpSGrp } from '../bookList'
import BoxList from './BoxList'
import CardList from './CardList'
import HeaderList from './HeaderList'
import TitleList from './TitleList'
import CheckBox from './CheckBox'
import MainList from './MainList'
import TitleListBox from './TitleListBox'
import SelectList from './SelectList'
import SelectFilter from './SelectFilter'
import SelectField from '../../../SelectField'
import ButtonFilter from './ButtonFilter'
// import Loading from '../../../Loading'

export default function BarListBox() {
  const [listCaption, setListCaption] = useState(listGrpSGrp)
  const [filter, setFilter] = useState({})

  const updateListCaption = useCallback((name, data) => {
    setListCaption(old => {
      return old.map(item => {
        return item.label === name ? { ...item, ...data } : item
      })
    })
  }, [])

  const handleChangeMainList = useCallback(
    (sinal, switchName) => {
      updateListCaption(switchName, { show: !!sinal })
    },
    [updateListCaption]
  )

  const applyFilter = useCallback(() => {
    console.log('Aplique o filtro tal', filter)
  }, [filter])

  // const applyFilter = useCallback(
  //   filterData => {
  //     const newFilter = { ...filter, ...filterData }
  //     setFilter(newFilter)
  //     console.log('Novo o filtro : ', filter)
  //   },
  //   [filter]
  // )

  const handleFilter = useCallback(data => {
    setFilter(old => ({ ...old, ...data }))
  }, [])

  return (
    <BoxList>
      {listCaption.map(({ id, label, show }) => {
        return (
          <CardList key={id}>
            <HeaderList>
              <TitleList title={label} />
              <CheckBox id={id} name={label} onChange={handleChangeMainList} />
            </HeaderList>
            <MainList id={id} name={label} disp={!!show}>
              <TitleListBox />
              <SelectList>
                <SelectFilter id={id} name={label} isDisplay={show} onFilter={handleFilter}>
                  <SelectField />
                </SelectFilter>
              </SelectList>
            </MainList>
          </CardList>
        )
      })}
      <ButtonFilter onClick={applyFilter} />
      {/* {loading ? <Loading /> : null} */}
    </BoxList>
  )
}
