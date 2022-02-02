import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../services/api/makeData/category'
import { getSubCategory } from '../../services/api/makeData/subcategory'
import Loading from '../../components/Loading'
import SelectField from '../../components/SelectField'

export default function SelectFilter({ onFilter }) {
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({})

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

  return (
    <>
      <SelectField
        name="categoryId"
        options={category}
        placeHolder="Opções..."
        onChange={handleChange}
      />
      {/* <SelectField
        name="subcategoryId"
        options={subcategory}
        placeHolder="Opções..."
        onChange={handleChange}
      /> */}
      <button onClick={emitOnFilter}>APLICAR</button>
      {loading ? <Loading /> : null}
    </>
  )
}

SelectFilter.propTypes = {
  onFilter: PropTypes.func
}

SelectFilter.defaultProps = {
  onFilter: () => {}
}
