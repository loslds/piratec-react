import React from 'react'
import PropTypes from 'prop-types'
// import BoxList from './BoxList'
import CardList from './CardList'
import HeaderList from './HeaderList'
import TitleList from './TitleList'
import CheckBox from './CheckBox'
import MainList from './MainList'
import TitleListBox from './TitleListBox'
import SelectList from './SelectList'
import { listGrpSGrp } from './bookList'
import ButtonFilter from './ButtonFilter'

export default function BarListBox({ label, disp }) {
  const [displaygrupo, setdisplaygrupo] = useState(false)
  const [displaysubgrupo, setdisplaysubgrupo] = useState(false)

  const onoffDisplayGrupo = useCallback(() => {
    setdisplaygrupo(oldState => !oldState)
  }, [])

  console.log('BarListBox displaygrupo : ', displaygrupo)

  const onoffDisplaySubGrupo = useCallback(() => {
    setdisplaysubgrupo(oldState => !oldState)
  }, [])

  console.log('BarListBox displaysubgrupo : ', displaysubgrupo)
  // const callchangerList = useCallback(
  //   e => {
  //     if (e.type.name === 'Grupo') return onoffDisplayGrupo()
  //   },
  //   [callchangerList]
  // )

  const listCaption = listGrpSGrp

  return (
    <BoxList>
      {listCaption.map(({ id, label, disp, dataname, fieldata, onclick, onchanger }) => {
        return (
          <CardList key={label}>
            <HeaderList>
              <TitleList title={label} />
              <CheckBox />
            </HeaderList>
            <MainList>
              <TitleListBox />
              <SelectList>{'seleclista'}</SelectList>
              <ButtonFilter />
            </MainList>
          </CardList>
        )
      })}
    </BoxList>
  )
}

BarListBox.propTypes = {
  label: PropTypes.string,
  callchangerList: PropTypes.func
}

BarListBox.defaultProps = {
  label: null,
  callchangerList: () => {}
}
