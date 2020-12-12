import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {authMiddleware} from './authMiddleware'

export const store = createStore(rootReducer, applyMiddleware(authMiddleware))