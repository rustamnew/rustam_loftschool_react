import auth from '../reducers/auth'

const initialState = {
    isLoggedIn: false
}
let action = {}


describe('auth', ()=>{
    it('reduce login', ()=> {
        action.type = 'LOG_IN'
        const func = auth(initialState, action)
        expect(func).toEqual({isLoggedIn: true})
    })

    it('reduce logout', () => {
        action.type = 'LOG_OUT'
        const func = auth(initialState, action)
        expect(func).toEqual({isLoggedIn: false})
    })

    it('reduce default', ()=> {
        const func = auth(initialState, action)
        expect(func).toEqual({isLoggedIn: false})
    })
})