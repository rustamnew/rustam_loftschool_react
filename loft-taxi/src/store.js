import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import createSagaMiddleware from 'redux-saga'
import {authSaga} from './sagas/authSaga'
import {registerSaga} from './sagas/registerSaga'
import {addressSaga} from './sagas/addressSaga'
import {routeSaga} from './sagas/routeSaga'

const sagaMiddlware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddlware))

sagaMiddlware.run(authSaga)
sagaMiddlware.run(registerSaga)
sagaMiddlware.run(addressSaga)
sagaMiddlware.run(routeSaga)