// import Api from '../../requester'
import { compareValues } from 'mini-helper'

const data = {
  success: true,
  subcategories: [
    { id: 1, name: 'SubCat 1' },
    { id: 2, name: 'SubCat 2' },
    { id: 3, name: 'SubCat 3' },
    { id: 4, name: 'SubCat 4' },
    { id: 5, name: 'SubCat 5' },
    { id: 6, name: 'SubCat 6' },
    { id: 7, name: 'SubCat 7' },
    { id: 8, name: 'SubCat 8' },
    { id: 9, name: 'SubCat 9' },
    { id: 10, name: 'SubCat 10' },
    { id: 11, name: 'SubCat 11' }
  ]
}

export async function getSubCategory(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.subcategory && order) {
    resultData.subcategory = resultData.subcategory.sort(compareValues(order, 'asc'))
    return resultData
  }
  return resultData
}
