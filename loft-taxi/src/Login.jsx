import React from 'react'

export const Login = (props) => {
    return (
        <form>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' size='28' />
    
            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' size='28' />
    
            <input type='submit' value='Войти' onClick={(e) => {
                e.preventDefault();
                props.nav('home')
            }}></input>
        </form>
        )
}
