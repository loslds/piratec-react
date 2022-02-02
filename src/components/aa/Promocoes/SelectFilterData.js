import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../services/api/makeData/category'
import { getSubCategory } from '../../services/api/makeData/subcategory'
import Loading from '../Loading'
import SelectField from '../SelectField'

export default function SelectFilterDatas({ onFilter }) {
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({})

  // const [callGrp, setCallGrp] = useState(false)
  // const [callsGrp, setCallsSGrp] = useState(false)

  // const handleGrp = useCallback(() => {
  //   setCallGrp(oldState => !oldState)
  // }, [])
  // const handleSGrp = useCallback(() => {
  //   setCallSGrp(oldState => !oldState)
  // }, [])

  const emitOnFilter = useCallback(filterData => onFilter(filterData), [onFilter])

  const updateFilter = useCallback(
    filterData => {
      const newFilter = { ...filter, ...filterData }
      setFilter(newFilter)
      /// emitOnFilter(newFilter)
    },
    [filter]
  )

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    const response = await getCategory()
    setLoading(false)
    if (response && response.success) setCategory(response.categories)
  }, [])

  const fetchSubCategories = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategory()
    setLoading(false)
    if (response && response.success) setSubCategory(response.subcategories)
  }, [])

  const handleChange = useCallback(
    (id, name) => {
      const value = parseInt(id, 10) || 0
      updateFilter({ [name]: value })
    },
    [updateFilter]
  )

  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  useEffect(() => {
    fetchSubCategories()
  }, [fetchSubCategories])

  return (
    <>
      <SelectField
        name="categoryId"
        options={category}
        placeHolder="Opções..."
        onChange={handleChange}
      />
      <SelectField
        name="subcategoryId"
        options={subcategory}
        placeHolder="Opções..."
        onChange={handleChange}
      />
      {/* <SelectField
        name="subcategoryId"
        options={category}
        placeHolder="opções..."
        onChange={handleChange}
      /> */}
      <button onClick={emitOnFilter}>APLICAR</button>
      {loading ? <Loading /> : null}
    </>
  )
}

SelectFilterDatas.propTypes = {
  onFilter: PropTypes.func
}

SelectFilterDatas.defaultProps = {
  onFilter: () => {}
}
