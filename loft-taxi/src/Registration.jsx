import { TextField } from '@material-ui/core';
import React from 'react';
import Button from '@material-ui/core/Button';


export const Registration = (props) => {
    return (
        <div className='registrationPanel'>
            <div className='panelTitle'>Регистрация</div>
            <form className='loginPanelForm'>
                <TextField id='email' type='email' size='28' label='email'/>

                <TextField id='name' type='text' size='28' label='Как вас зовут'/>

                <TextField id='password' type='password' label='password'/>

                <input className='submit input' type='submit' value='Зарегистрироваться' onClick={(e) => {
                    e.preventDefault();
                    props.navigateTo('home')
                }}></input>

                <button className='panelSwitch button' onClick={(e) => {
                    e.preventDefault()
                    props.switchButton()
                }}>Войти</button>
            </form>
        </div>
    )
}