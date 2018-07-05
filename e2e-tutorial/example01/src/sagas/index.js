import { all, call } from 'redux-saga/effects'
import counterSaga from './counter'
import productSaga from '~/containers/Product/service'

const sagas = [
  all(productSaga),
  call(counterSaga),
]

export default function* mainSaga() {
  yield all(sagas)
}