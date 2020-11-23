import React from 'react';

export const Registration = (props) => {
    return (
        <form>
            <label htmlFor='email'>Email</label>
            <input id='email' type='email' name='email' size='28' />

            <label htmlFor='name'>Имя</label>
            <input id='name' type='text' size='28'></input>

            <label htmlFor='name'>Фамилия</label>
            <input id='surname' type='text' size='28'></input>

            <label htmlFor='password'>Password</label>
            <input id='password' type='password' name='password' size='28' />

            <input type='submit' value='Зарегистрироваться' onClick={(e) => {
                e.preventDefault();
                props.navigateTo('home')
            }}></input>

            <button onClick={(e) => {
                e.preventDefault()
                props.switchButton()
            }}>Вход</button>
        </form>
    )
}