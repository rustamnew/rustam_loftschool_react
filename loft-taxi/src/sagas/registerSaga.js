import { takeEvery, call, put} from 'redux-saga/effects'
import {REGISTER} from '../actions'
import {serverRegister} from '../api'

export function* registrationSaga(action) {
    const {email, password, name, surname} = action.payload
    yield call(serverRegister, email, password, name, surname)
}

export function* registerSaga() {
    yield takeEvery (REGISTER, registrationSaga)
}