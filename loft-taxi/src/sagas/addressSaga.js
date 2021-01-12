import { takeEvery, call} from 'redux-saga/effects'
import {ADDRESS} from '../actions'
import {serverGetAddress} from '../api'

export function* addressListSaga() {
    yield call(serverGetAddress)
}

export function* addressSaga() {
    yield takeEvery (ADDRESS, addressListSaga)
}