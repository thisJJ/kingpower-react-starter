import { call } from 'redux-saga/effects'
import { initProduct } from './saga'

export default [
  call(initProduct),
]
