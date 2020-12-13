import {register} from '../actions'
import {serverRegister} from '../api'
import {REGISTER} from '../actions'

export const registerMiddleware = (store) => (next) => async (action) => {
    if(action.type === REGISTER) {
        const {email, password, name, surname} = action.payload
        const success = await serverRegister(email, password, name, surname)
        if(success) {
            store.dispatch(register())
        }
    } else {
        next(action)
    }
}