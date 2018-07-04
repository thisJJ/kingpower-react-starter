import {
  call,
  takeEvery,
  put,
  // select,
  // take,
  // cancel,
} from 'redux-saga/effects'
import * as productApi from './api'
import {
  LOAD_PRODUCT_SKU,
  loadProductSuccess,
} from '../store/reducer'
export function* loadProductBySKU(action) {
  try {
    const { sku, lang } = action
    const resultProductBySKU = yield call(productApi.loadProductBySKU, sku, lang)
    yield put(loadProductSuccess(resultProductBySKU))
  } catch(error) {
    yield put(loadProductSuccess({ error }))
  }
}


export function* initProduct() {
  yield takeEvery(LOAD_PRODUCT_SKU, loadProductBySKU)
}
