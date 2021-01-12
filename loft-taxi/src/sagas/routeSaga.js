import { takeEvery, call} from 'redux-saga/effects'
import {ROUTE} from '../actions'
import {serverGetRoute} from '../api'

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload
    yield call(serverGetRoute, address1, address2)
}

export function* routeSaga() {
    yield takeEvery (ROUTE, getRouteSaga)
}
