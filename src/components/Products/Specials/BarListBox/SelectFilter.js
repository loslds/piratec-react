import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { getCategory } from '../../../../services/api/makeData/category'
import { getSubCategory } from '../../../../services/api/makeData/subcategory'
import SelectField from '../../../SelectField'

export default function SelectFilter({ id, name, isDisplay, onFilter }) {
  const [category, setCategory] = useState([])
  const [subcategory, setSubCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({})

  const emitOnFilter = useCallback(filterData => onFilter(filterData), [onFilter])

  const updateFilter = useCallback(
    filterData => {
      const newFilter = { ...filter, ...filterData }
      setFilter(newFilter)
      emitOnFilter(newFilter)
    },
    [filter, emitOnFilter]
  )

  const fetchCategories = useCallback(async () => {
    setLoading(true)
    const response = await getCategory()
    setLoading(false)
    if (response && response.success) {
      setCategory(response.categories)
    }
  }, [])

  const fetchSubCategories = useCallback(async () => {
    setLoading(true)
    const response = await getSubCategory()
    setLoading(false)
    if (response && response.success) {
      setSubCategory(response.subcategories)
    }
  }, [])

  const handleChange = useCallback(
    (id, name) => {
      const value = parseInt(id, 10) || 0
      updateFilter({ [name]: value })
    },
    [updateFilter]
  )

  useEffect(() => {
    if (name === 'Grupos') fetchCategories()
    if (name === 'Sub-Grupos') fetchSubCategories()
  }, [fetchCategories, fetchSubCategories, name])

  const renderSelect = useCallback(() => {
    return (
      <SelectField
        name={name === 'Grupos' ? 'categoryId' : 'subcategoryId'}
        options={name === 'Grupos' ? category : subcategory}
        placeHolder="Opções..."
        onChange={handleChange}
        disabled={loading}
      />
    )
  }, [category, subcategory, name, handleChange, loading])

  return <>{isDisplay ? renderSelect() : null}</>
}

SelectFilter.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  onFilter: PropTypes.func,
  isDisplay: PropTypes.bool
}

SelectFilter.defaultProps = {
  id: 0,
  name: 'semnome',
  onFilter: () => {},
  isDisplay: false
}
