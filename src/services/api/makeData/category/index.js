// import Api from '../../requester'
import { compareValues } from 'mini-helper'

const data = {
  success: true,
  categories: [
    { id: 1, name: 'Cat 1' },
    { id: 2, name: 'Cat 2' },
    { id: 3, name: 'Cat 3' },
    { id: 4, name: 'Cat 4' },
    { id: 5, name: 'Cat 5' },
    { id: 6, name: 'Cat 6' },
    { id: 7, name: 'Cat 7' },
    { id: 8, name: 'Cat 8' },
    { id: 9, name: 'Cat 9' }
  ]
}

export async function getCategory(options = {}) {
  const result = await new Promise(resolve => {
    setTimeout(() => {
      resolve({ data })
    }, 2000)
  })

  const { order } = options
  const resultData = result && result.data
  if (resultData.categories && order) {
    resultData.categories = resultData.categories.sort(compareValues(order, 'asc'))
  }
  return resultData
}
