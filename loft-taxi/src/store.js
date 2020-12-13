import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers/index'
import {authMiddleware} from './middlewares/authMiddleware'
import {registerMiddleware} from './middlewares/registerMiddleware'

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, registerMiddleware))