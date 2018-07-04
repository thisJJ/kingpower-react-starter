import { createSelector } from 'reselect'
import { get } from 'lodash'
const productSelector = state => get(state, 'products', {})
export const getProductSelector = createSelector(
  productSelector,
  data => get(data, 'product', {})
)
