import { takeEvery, call, put} from 'redux-saga/effects'
import {CARD} from '../actions'
import {serverSendCard} from '../api'

export function* sendPaymentSaga(action) {
    const {cardOwnerName, cardNumber, cardDate, cardCVC} = action.payload
    yield call(serverSendCard, cardOwnerName, cardNumber, cardDate, cardCVC)
}

export function* paymentSaga() {
    yield takeEvery (CARD, sendPaymentSaga)
}